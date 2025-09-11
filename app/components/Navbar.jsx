'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setIsAuthChecked(true);
  }, [pathname]);

  const go = (path) => () => router.push(path);

  const navButton =
    'text-sm px-4 py-1.5 font-medium text-white hover:text-indigo-300 transition';

  if (!isAuthChecked) return null;

  return (
    <nav className="flex justify-center px-4 py-4 sticky top-4 z-50">
      <div className="flex items-center flex-wrap justify-center gap-x-4 
        bg-indigo-600/90 backdrop-blur-md rounded-full border border-white/20 
        shadow-lg px-6 py-2">
        
        {/* Logo */}
        <h1
          onClick={go('/')}
          className="text-white font-bold text-lg cursor-pointer tracking-wide"
        >
          FindIt
        </h1>

        {/* Home Page */}
        {pathname === '/' && (
          <>
            {isLoggedIn ? (
              <>
                <button onClick={go('/dashboard')} className={navButton}>
                  Dashboard
                </button>
                <button onClick={go('/report')} className={navButton}>
                  Report Item
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    setIsLoggedIn(false);
                    router.push('/login');
                  }}
                  className="text-sm px-4 py-1.5 font-medium text-red-300 hover:text-red-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={go('/about')} className={navButton}>
                  About Us
                </button>
                <button onClick={go('/signup')} className={navButton}>
                  Signup
                </button>
                <button onClick={go('/login')} className={navButton}>
                  Login
                </button>
              </>
            )}
          </>
        )}

        {/* Login / Signup Pages */}
        {(pathname === '/login' || pathname === '/signup') && (
          <>
            <button onClick={go('/')} className={navButton}>
              Home
            </button>
            <button
              onClick={go(pathname === '/login' ? '/signup' : '/login')}
              className={navButton}
            >
              {pathname === '/login' ? 'Signup' : 'Login'}
            </button>
          </>
        )}

        {/* Dashboard / Report */}
        {(pathname === '/dashboard' || pathname === '/report') && isLoggedIn && (
          <>
            <button onClick={go('/')} className={navButton}>
              Home
            </button>
            <button
              onClick={go(pathname === '/dashboard' ? '/report' : '/dashboard')}
              className={navButton}
            >
              {pathname === '/dashboard' ? 'Report Item' : 'Dashboard'}
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                router.push('/login');
              }}
              className="text-sm px-4 py-1.5 font-medium text-red-300 hover:text-red-500 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
