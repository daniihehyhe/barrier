import { useState } from 'react';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer flex flex-col items-center absolute top-2 right-2 z-50 ${
          isOpen ? 'close' : ''
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`h-[3px] w-[30px] mb-[6px] bg-white transition-transform duration-300 ease-linear ${
            isOpen
              ? 'bg-red-500 transform rotate-45 translate-x-[5px] translate-y-[5px]'
              : 'hover:animate-slide1'
          }`}
        ></div>
        <div
          className={`h-[3px] w-[30px] mb-[6px] bg-white transition-opacity duration-300 ease-linear ${
            isOpen ? 'opacity-0' : 'hover:animate-slide2'
          }`}
        ></div>
        <div
          className={`h-[3px] w-[30px] bg-white transition-transform duration-300 ease-linear ${
            isOpen
              ? 'bg-red-500 transform -rotate-45 translate-x-[8px] -translate-y-[8px]'
              : 'hover:animate-slide3'
          }`}
        ></div>
      </div>
    </div>
  );
}

export default BurgerMenu;
