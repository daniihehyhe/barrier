import React, { useState } from 'react';
import CameraStream from '../../components/CameraStream';
import SearchCar from './SearchCar';

const CameraPage = () => {
  const [size, setSize] = useState(['medium', 'mediumPleer']);  // Состояние для выбора размера плеера


  return (
    <div className=" bg-gray-100 p-4 ">

      <div className="flex  justify-around  mt-5  gap-4 mb-12 pb-8  border-b-2 border-pcbg">
        <div className='flex flex-col items-center'>
<h5 className='block text-3xl font-semibold text-pcbg mb-3'>Размеры экрана</h5>
<div className='flex gap-3 justify-center items-center'>
        <button onClick={() => setSize(['medium', 'mediumPleer'])} className="bg-pcbg hover:bg-bghov text-white px-4 py-2 rounded mr-2">
          Маленький
        </button>
        <button onClick={() => setSize(['large', 'largePleer'])} className="bg-pcbg hover:bg-bghov text-white px-4 py-2 rounded">
          Большой
        </button>
        </div>
        </div>
        <SearchCar/>
      </div>

      <CameraStream  size={size} />
    </div>
  );
};

export default CameraPage;
