"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='flex items-center'>
        <Image src='/favicon.svg' width={30} height={30} alt='Logo' className='mr-2' />
        <h1 className='text-lg font-semibold text-gray-800'>COURSE4U</h1> {/* Optional: Add a title for your app */}
      </div>
      <UserButton />
    </div>
  );
}

export default Header;