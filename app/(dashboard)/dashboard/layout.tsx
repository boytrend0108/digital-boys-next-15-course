import React from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-blue-900 p-5'>
      Dashboard Layout
      {children}
    </div>
  );
}
