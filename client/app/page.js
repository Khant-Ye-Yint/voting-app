'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import PollCardList from '@/components/Polls/PollCardList';

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const auth = localStorage.getItem('auth');
    if (!auth) {
      router.push('/auth/login');
    }
    setLoading(false);
  });

  return (
    <div>
      <h1 className="text-2xl ">Current Polls</h1>
      {loading ? <h1>Loading ...</h1> : <PollCardList />}
    </div>
  );
};

export default Home;
