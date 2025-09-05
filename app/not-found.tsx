'use client';

import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className='not-found'>
            <h1>Page Not Found</h1>
            <p className='mb-4'>The page you are looking for does not exist.</p>
            <Link href='/' className='btn text-amber-500 hover:text-blue-500'>Go back Home</Link>
        </main>
    )
}

export default NotFound