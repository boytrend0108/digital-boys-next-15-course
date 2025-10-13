import React from 'react';

export default function ProfileLayout({
  children,
  analitics,
}: Readonly<{
  children: React.ReactNode;
  analitics: React.ReactNode;
}>) {
  return (
    <div className='bg-fuchsia-800 p-4'>
      ProfileLayout
      {children}
      {analitics}
    </div>
  );
}
