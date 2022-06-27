import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='flex items-center justify-center space-x-32'>
        <div className='flex items-center justify-center p-5'>
          <h1 className='text-white text-lg font-bold'>
            CRYPTO <span className='text-green-500 font-bold text-lg'>ICO</span>
          </h1>
        </div>
        <div className='flex items-center justify-center space-x-12 p-5'>
          <a className='text-white text-base hover:font-bold hover:border-b-4 hover:border-green-500 transition duration-300 cursor-pointer'>
            Home
          </a>
          <a className='text-white text-base hover:font-bold hover:border-b-4 hover:border-green-500 transition duration-300 cursor-pointer'>
            Price
          </a>
          <a className='text-white text-base hover:font-bold hover:border-b-4 hover:border-green-500 transition duration-300 cursor-pointer'>
            Profile
          </a>
          <a className='text-white text-base hover:font-bold hover:border-b-4 hover:border-green-500 transition duration-300 cursor-pointer'>
            About
          </a>
        </div>
        <div className='flex items-center justify-center space-x-12 p-5'>
          <a className=' cursor-pointer p-2 text-white text-base font-semibold outline-none border-none'>
            Login
          </a>
          <a className=' cursor-pointer text-black text-base font-semibold outline-none border-none rounded-full px-6 py-2 bg-green-500 hover:shadow hover:shadow-green-500 duration-200'>
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
