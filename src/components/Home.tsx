import React from 'react';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    document.title = 'NBA League Live';
  }, []);
  return (
    <div className="flex h-96 w-screen justify-center items-center">Home</div>
  );
};

export default Home;
