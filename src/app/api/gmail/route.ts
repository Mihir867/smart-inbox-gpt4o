import { google } from "googleapis";
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

async function getEmails(req:NextRequest, res:NextResponse) {
 
    const session = await getSession();
    console.log(session);

    

    const accessToken = session.accessToken as string | undefined;
    console.log(accessToken);

    

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const url = `https://gmail.googleapis.com/gmail/v1/users/me/threads?maxResults=100`;
    const config = createConfig(url, accessToken);
    const response = await axios(config);

    res.json(response.data);
 
}

const createConfig = (url:any, accessToken:any) => {
  return {
    method: 'get',
    url: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    },
  };
};

export default getEmails;