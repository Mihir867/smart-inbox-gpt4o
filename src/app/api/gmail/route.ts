import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { getToken } from 'next-auth/jwt';
import { JSDOM } from 'jsdom';

const htmlToText = (html: any) => {
  const dom = new JSDOM(html);
  let plainText = dom.window.document.body.textContent || '';
  plainText = plainText.replace(/&nbsp;/g, ' ');
  plainText = plainText.replace(/&amp;/g, '&');
  return plainText;
};

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: token.accessToken as string,
  });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  try {
    const response = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 50,
    });

    const messages = await Promise.all(response.data.messages!.map(async (message) => {
      const msg = await gmail.users.messages.get({ userId: 'me', id: message.id });
      
      const payload = msg.data.payload;
      let body = '';
      
      if (payload?.body?.data) {
        body = Buffer.from(payload.body.data, 'base64').toString('utf-8');
      } else if (payload?.parts) {
        body = payload.parts.map(part => part.body?.data ? Buffer.from(part.body.data, 'base64').toString('utf-8') : '').join('');
      }

      const plainText = htmlToText(body);

      return {
        id: msg.data.id,
        threadId: msg.data.threadId,
        payload: {
          headers: msg.data.payload?.headers,
          body: plainText
        }
      };
    }));

    return NextResponse.json({ emails: messages });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
