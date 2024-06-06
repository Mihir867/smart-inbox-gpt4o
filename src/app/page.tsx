// pages/index.js
"use client"

import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
     
      <button
        className="bg-gray-400 text-black font-bold py-3 px-6 rounded-lg shadow flex items-center space-x-2 hover:bg-gray-100 focus:outline-none"
        onClick={() => alert('Google Auth')}
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="#4285F4" d="M24 9.5c3.9 0 6.6 1.6 8.1 2.9l5.9-5.7C34.2 3.5 29.7 2 24 2 14.9 2 7.3 7.7 4.4 15.3l6.9 5.4C12.8 14.2 17.9 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.6 24.5c0-1.7-.1-3.3-.4-4.9H24v9.3h12.9c-.6 3.2-2.6 5.9-5.5 7.7l6.8 5.2c4-3.7 6.4-9.1 6.4-15.3z"/>
          <path fill="#FBBC05" d="M10.7 29.7c-1.2-.4-2.2-1-3.1-1.7l-6.8 5.2c3.3 5.1 8.7 8.7 15 8.7 5.6 0 10.3-1.8 13.8-4.8l-6.8-5.2c-2 1.4-4.5 2.3-7 2.3-4.5 0-8.3-2.9-9.6-6.7z"/>
          <path fill="#EA4335" d="M24 46c6 0 11-2 14.7-5.3l-6.8-5.2c-2.5 1.7-5.5 2.7-8.8 2.7-6.4 0-11.8-4.2-13.7-9.9l-6.8 5.2C6.6 41.6 14.6 46 24 46z"/>
          <path fill="none" d="M2 2h44v44H2z"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
    </div>
  )
}
