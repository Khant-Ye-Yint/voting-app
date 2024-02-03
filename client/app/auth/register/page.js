import Link from 'next/link';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Register User</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-5 my-5 w-72">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Name</h1>
          <input type="text" className="bg-gray-200 ring-1 ring-green-300" />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Email</h1>
          <input type="text" className="bg-gray-200 ring-1 ring-green-300" />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg">Password</h1>
          <input type="text" className="bg-gray-200 ring-1 ring-green-300" />
        </div>
        <div className="flex flex-row gap-2">
          <Link href="/dashboard/bestSingerInMyanmar">
            <div className="px-2 py-1 bg-gray-300 rounded-md cursor-pointer hover:bg-gray-400 text-md">
              Cancel
            </div>
          </Link>
          <div className="px-2 py-1 bg-green-300 rounded-md cursor-pointer hover:bg-green-400 text-md">
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
