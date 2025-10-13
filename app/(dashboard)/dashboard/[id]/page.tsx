import React from 'react';

export default async function DashboardItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className='bg-amber-900 text-amber-50'> Dashboard Item {id} </div>
  );
}
