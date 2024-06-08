// pages/api/gmail.ts
import { google } from "googleapis";
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const accessToken = session.accessToken as string | undefined;

  if (!accessToken) {
    return res.status(401).json({ error: "No access token found" });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  try {
    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 20,
    });

    const messages = response.data.messages || [];

    const emails = await Promise.all(
      messages.map(async (message) => {
        const msg = await gmail.users.messages.get({
          userId: "me",
          id: message.id as string,
        });
        return msg.data;
      })
    );

    res.status(200).json({ emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ error: "Error fetching emails" });
  }
}
