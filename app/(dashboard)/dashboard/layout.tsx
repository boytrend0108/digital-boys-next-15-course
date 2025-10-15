import Link from 'next/link';
import React from 'react';

export default function DashboardLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <div className='bg-blue-900 p-5'>
      <Link href='/' className='mr-3'>
        Home
      </Link>

      <Link href='/profile' className='mr-3'>
        Profile
      </Link>

      <Link href='/login'>Login</Link>
      {children}
      {auth}
    </div>
  );
}
