"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface Email {
  id: string;
  payload: {
    headers: { name: string; value: string }[];
    body: string;
  };
}

const Page: React.FC = () => {
  const { data: session, status } = useSession();
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

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

 
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  if (status === 'authenticated') {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white p-4">
        <div className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <img src={session.user.image || ''} alt="Profile Picture" className="rounded-full w-16 h-16" />
            <div>
              <p className="text-xl font-semibold">{session.user.name}</p>
              <p className="text-gray-400">{session.user.email}</p>
            </div>
          </div>
          <button
            className="w-full mt-4 px-6 py-3 text-white bg-red-600 border-2 border-red-600 rounded-md hover:bg-red-700 transition"
            onClick={() => signOut()}
          >
            Logout
          </button>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Emails:</h2>
            <ul className="space-y-4">
              {emails.map((email) => (
                <li
                  key={email.id}
                  className="p-4 border-b-2 border-gray-700 cursor-pointer"
                  onClick={() => setSelectedEmail(email)}
                >
                  <p><strong>From:</strong> {email.payload.headers.find(header => header.name === 'From')?.value}</p>
                  <p><strong>Subject:</strong> {email.payload.headers.find(header => header.name === 'Subject')?.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {selectedEmail && (
          <div className="fixed top-0 [&::-webkit-scrollbar]:hidden right-0 w-full md:w-1/2 mt-4 md:mt-0 bg-black rounded-lg md:mr-4 h-full p-4 text-white overflow-y-auto scrollbar-hidden">
            <button onClick={() => setSelectedEmail(null)} className="text-red-500">Close</button>
            <h2 className="text-xl font-bold">Subject: {selectedEmail.payload.headers.find(header => header.name === 'Subject')?.value}</h2>
            <p className='border-b-2 pb-4'><strong>From:</strong> {selectedEmail.payload.headers.find(header => header.name === 'From')?.value}</p>
            <p className="mt-4 whitespace-pre-wrap">{selectedEmail.payload.body}</p>
          </div>
        )}
      </div>
    );
  }

 

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            Beta Now Live!
          </span>
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Decrease your Emails churn by over 90%
          </h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Don't worry, your emails are as private as your browser history during incognito mode. Stored only in your browser's local storage, so even we can't snoop on your secrets!

          </p>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50" onClick={() => signIn('google')}
          ><FcGoogle className="w-6 h-6 mr-2" />
            Login with Google
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>

      
          
    </>
  );
};

export default Page;
