import logo from './img/mobile-img.png';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-hidden bg-gradient-to-b from-indigo-800 to-black'>
      <Header />
      <div className='flex flex-col lg:flex-row  items-center space-x-11 px-28 pt-0 py-0'>
        <div className='flex flex-col items-start justify-center p-5 space-y-8'>
          <h1 className='text-white font-extrabold text-6xl leading-snug'>
            {' '}
            Crypto Currency <br /> Exchange
          </h1>
          <p className='text-white max-w-md text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>{' '}
          <a className=' cursor-pointer text-black text-base font-semibold outline-none border-none rounded-full px-6 py-2 bg-green-500 hover:shadow hover:shadow-green-500 duration-200'>
            Sign up
          </a>
        </div>
        <div className='flex-1'>
          <img src={logo} className='h-[45rem] w-[31rem]' loading='lazy' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
