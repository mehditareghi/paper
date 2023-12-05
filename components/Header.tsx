import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: 'خانه',
      url: '/',
    },
    {
      name: 'معلم‌ها',
      url: '/tutors',
    },
    {
      name: 'دربارهٔ ما',
      url: '/about',
    },
    {
      name: 'تماس با ما',
      url: '/contact',
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-blue-950'>
      <div className='flex items-center justify-between mx-auto lg:mx-[300px] p-4 lg:px-0'>
        <div className='text-white text-lg'>کاغذ:)</div>
        <div className='lg:hidden' onClick={toggleMenu}>
          <div className='h-1 w-6 bg-white my-1'></div>
          <div className='h-1 w-6 bg-white my-1'></div>
          <div className='h-1 w-6 bg-white my-1'></div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className='p-4 lg:flex lg:p-0'>
            {navLinks.map((link, index) => {
              return (
                <Link
                  href={link.url}
                  className='block text-black text-lg my-2 lg:text-white lg:my-0 lg:mx-2'
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className='hidden lg:block'>
          <nav className='p-4 lg:flex lg:p-0'>
            {navLinks.map((link, index) => {
              return (
                <Link
                  href={link.url}
                  className='block text-black text-lg my-2 lg:text-white lg:my-0 lg:mx-2'
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
