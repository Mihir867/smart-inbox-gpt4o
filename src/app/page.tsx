'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { FcGoogle } from 'react-icons/fc';

interface Email {
  id: string;
  payload: {
    headers: { name: string; value: string }[];
  };
}

const Page: React.FC = () => {
  const { data: session, status } = useSession();
  const [apiKey, setApiKey] = useState<string>('');
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    if (session && session.user) {
      localStorage.setItem('user_name', session.user.name || '');
      localStorage.setItem('user_email', session.user.email || '');
      console.log('User name:', session.user.name);
      console.log('User email:', session.user.email);

      fetchEmails();
    }
  }, [session]);

  const fetchEmails = async () => {
    try {
      const res = await fetch('/api/gmail', {
        method: 'POST',
      });
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Unexpected content type: ' + contentType);
      }
      const data = await res.json();
      if (res.ok) {
        setEmails(data.emails);
        localStorage.setItem('emails', JSON.stringify(data.emails));
      } else {
        console.error('Error fetching emails:', data.error);
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const handleApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newApiKey = event.target.value;
    setApiKey(newApiKey);
    localStorage.setItem('openai_api_key', newApiKey);
    console.log('OpenAI API Key:', newApiKey);
  };

  if (status === 'authenticated') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
  <div className="space-y-6 w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4">
      <img src={session.user.image || ''} alt="Profile Picture" className="rounded-full w-16 h-16" />
      <div>
        <p className="text-xl font-semibold">{session.user.name}</p>
        <p className="text-gray-400">{session.user.email}</p>
      </div>
    </div>
    <button
      className="flex items-center justify-center w-full px-6 py-3 text-white bg-red-600 border-2 border-red-600 rounded-md hover:bg-red-700 transition"
      onClick={() => signOut()}
    >
      Logout
    </button>
    <div className="mt-4">
      <h2 className="text-lg font-bold">Emails:</h2>
      <ul className="space-y-4">
        {emails.map((email) => (
          <li key={email.id} className="p-4 border-b-2 border-gray-700">
            <p><strong>From:</strong> {email.payload.headers.find(header => header.name === 'From')?.value}</p>
            <p><strong>Subject:</strong> {email.payload.headers.find(header => header.name === 'Subject')?.value}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="space-y-4 w-full max-w-md px-4">
        <button
          className="flex items-center justify-center w-full px-6 py-3 text-white bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition"
          onClick={() => signIn('google')}
        >
          <FcGoogle className="w-6 h-6 mr-2" />
          Login with Google
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter OpenAI API Key"
            className="w-full px-6 py-3 text-white bg-transparent border-2 border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Make sure to only login once the API key is entered
        </p>
      </div>
    </div>
  );
};

export default Page;
