'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setAuth(localStorage.getItem('auth'));
    if (auth) {
      setEmail(localStorage.getItem('email'));
      router.push('/');
    }
  }, [auth]);

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    router.push('/auth/login');
  };

  return (
    <div className=" min-h-[10vh] w-full flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className="text-4xl font-bold cursor-pointer ">Voting App</h1>
      </Link>
      <div>
        {email && <p>lee lrr</p>}
        {auth ? (
          <h2 className="cursor-pointer " onClick={handleLogout}>
            Logout
          </h2>
        ) : (
          <Link href="/auth/login">
            <h2>Login</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
