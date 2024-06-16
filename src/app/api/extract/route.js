import { NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function POST(req) {
  const body = await req.json();
  const { html_email } = body;

  if (!html_email) {
    return NextResponse.json({ error: 'html_email is required' }, { status: 400 });
  }

  try {
    const plainText = extractPlainText(html_email);
    return NextResponse.json({ plain_text: plainText }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to extract plain text' }, { status: 500 });
  }
}

function extractPlainText(htmlEmail) {
  // Create a new JSDOM instance
  const dom = new JSDOM(htmlEmail);
  // Use textContent to get the plain text content of the Document
  let plainText = dom.window.document.body.textContent || '';

  // Replace HTML entities
  plainText = plainText.replace(/&nbsp;/g, ' ');
  plainText = plainText.replace(/&amp;/g, '&');

  return plainText;
}
