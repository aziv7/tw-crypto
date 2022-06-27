import React from 'react';
import iconBit from '../img/icon-bitcoin.svg';
import dogeCoin from '../img/icon-dogecoin.svg';
import Etherium from '../img/icon-ethereum.svg';
import Litecoin from '../img/icon-litecoin.svg';
import ripple from '../img/icon-ripple.svg';
import stellar from '../img/icon-stellar.svg';

const Footer = () => {
  return (
    <footer>
      <div className='lg:space-x-12 space-x-11 flex items-center justify-center p-5 px-28'>
        <div className='flex items-center space-x-2'>
          <img src={iconBit} />
          <p className='text-white text-lg opacity-40'>Bitcoin</p>
        </div>
        <div className='flex items-center space-x-2'>
          <img src={dogeCoin} />
          <p className='text-white text-lg opacity-40'>DogeCoin</p>
        </div>
        <div className='flex items-center space-x-2'>
          <img src={Etherium} />
          <p className='text-white text-lg opacity-40'>Etherium</p>
        </div>
        <div className='flex items-center space-x-2'>
          <img src={Litecoin} />
          <p className='text-white text-lg opacity-40'>Bitcoin</p>
        </div>
        <div className='flex items-center space-x-2'>
          <img src={ripple} />
          <p className='text-white text-lg opacity-40'>Ripple</p>
        </div>
        <div className='flex items-center space-x-2'>
          <img src={stellar} />
          <p className='text-white text-lg opacity-40'>Stellar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
