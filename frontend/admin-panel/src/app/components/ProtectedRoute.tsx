'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            router.push('/login');
            return;
        }

        try {
            const decodedToken: { exp: number } = jwtDecode(token);
            const isExpired = decodedToken.exp * 1000 < Date.now(); // Convert `exp` to milliseconds
            if (isExpired) {
                localStorage.removeItem('access-token');
                router.push('/login');
            }
        } catch (error) {
            console.error('Invalid token:', error);
            router.push('/login');
        }
    }, [router]);

    return <>{children}</>;
}
