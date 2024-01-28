import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" min-h-[10vh] w-full flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className=" text-4xl font-bold cursor-pointer">Voting App</h1>
      </Link>
      <div>
        <h2>Sign In</h2>
      </div>
    </div>
  );
};

export default Navbar;
