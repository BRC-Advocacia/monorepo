'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isTokenValid } from '@/utils/auth';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            router.push('/login');
            return;
        }

        if (!isTokenValid()) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('token_timestamp');
            router.push('/login');
          }

    }, [router]);

    return (
     <>
    {children}
    </>);
}
