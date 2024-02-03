'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Login</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-5 my-5 w-72">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Email</h1>
          <input
            type="text"
            className="px-1 bg-gray-200 ring-1 ring-green-300"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Password</h1>
          <input
            type="password"
            className="px-1 bg-gray-200 ring-1 ring-green-300"
          />
        </div>
        <div className="flex flex-row gap-2">
          <div
            className="px-2 py-1 bg-gray-300 rounded-md cursor-pointer hover:bg-gray-400 text-md"
            onClick={() => router.back()}
          >
            Cancel
          </div>

          <div className="px-2 py-1 bg-green-300 rounded-md cursor-pointer hover:bg-green-400 text-md">
            Login
          </div>
        </div>
      </form>
      <div>
        Don't have account ?{' '}
        <Link
          href="/auth/register"
          className="text-blue-500 hover:text-blue-800"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
