'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const router = useRouter();

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/user/register', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        setError(null);
        console.log(res);
        router.push('/auth/login');
      })
      .catch((err) => {
        setError(err.response.data);
        console.error(err);
      });

    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Register User</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-5 my-5 w-72">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Name</h1>
          <input type="text" className="input" ref={nameRef} />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Email</h1>
          <input type="text" className="input" ref={emailRef} />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Password</h1>
          <input type="password" className="input" ref={passwordRef} />
        </div>
        {error && <div className="text-center text-red-500">{error}</div>}
        <div className="flex flex-row gap-2">
          <Link href="/dashboard/bestSingerInMyanmar">
            <div className="px-2 py-1 bg-gray-300 rounded-md cursor-pointer hover:bg-gray-400 text-md">
              Cancel
            </div>
          </Link>
          <div
            className="px-2 py-1 bg-green-300 rounded-md cursor-pointer hover:bg-green-400 text-md"
            onClick={handleSubmit}
          >
            Register
          </div>
        </div>
      </form>
      <div>
        Already have account ?{' '}
        <Link href="/auth/login" className="text-blue-500 hover:text-blue-800">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
