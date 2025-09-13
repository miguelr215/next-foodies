'use client';

import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className='not-found'>
            <h1>Meal Not Found</h1>
            <p className='mb-4'>Sorry, we couldn&apos;t find the meal you were looking for</p>
            <Link href='/meals' className='btn text-amber-500 hover:text-blue-500'>Go back to Meals</Link>
        </main>
    )
}

export default NotFound