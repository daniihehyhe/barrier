import React, { useEffect, useState } from 'react';
import carImage from '../../assets/car.jfif'; // Replace with the correct path to your car image
import kg from '../../assets/kg.png';

// Функция для генерации случайного номера машины
const generateRandomCarNumber = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = Math.floor(Math.random() * 900) + 100; // Случайное число от 100 до 999
  const letterPart = letters[Math.floor(Math.random() * letters.length)] + 
                     letters[Math.floor(Math.random() * letters.length)] + 
                     letters[Math.floor(Math.random() * letters.length)];
  return `${numbers} ${letterPart}`;
};

// Функция для генерации случайной даты и времени
const generateRandomDateTime = () => {
  const now = new Date();
  const randomOffsetMinutes = Math.floor(Math.random() * 1440); // Случайное время в пределах 24 часов
  const randomDateTime = new Date(now.getTime() - randomOffsetMinutes * 60 * 1000);
  
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  
  const date = randomDateTime.toLocaleDateString('ru-RU', dateOptions);
  const time = randomDateTime.toLocaleTimeString('ru-RU', timeOptions);
  
  return { date, time };
};

const ParkingCost = () => {
  const [carNumber, setCarNumber] = useState(generateRandomCarNumber());
  const [entryTime, setEntryTime] = useState(generateRandomDateTime());

  // Логика для изменения данных при каждом рендере или обновлении компонента
  useEffect(() => {
    const interval = setInterval(() => {
      setCarNumber(generateRandomCarNumber());
      setEntryTime(generateRandomDateTime());
    }, 5000); // Обновление данных каждые 5 секунд (например)

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, []);

  return (
    <div className="border-2 border-pcbg rounded-lg p-14 bg-white w-2/3 mx-auto mt-10 shadow-md">
      <div className="flex flex-col justify-center items-center">
        <div className='flex w-full gap-5'>
          {/* Left Section: Car Image */}
          <div className="w-1/2 flex justify-end">
            <img
              src={carImage}
              alt="Car"
              className="max-w-full rounded-2xl object-cover border border-blue-300"
            />
          </div>

          {/* Right Section: Information */}
          <div className="pl-3 w-1/2 flex flex-col items-start justify-center">
            {/* License Plate Section */}
            <div className="flex items-center mb-4">
              <div className="flex items-center border-2 border-pcbg p-2 rounded-lg">
                <div className="mr-2 text-center border-r-2 border-pcbg pr-3">
                  <div className="text-2xl font-bold">08</div>
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <img className='w-9' src={kg} alt="kg" />
                    KG
                  </div>
                </div>
                <div className="text-2xl font-bold">{carNumber}</div>
              </div>
            </div>

            {/* Table Section */}
            <div className="w-full max-w-xs text-lg my-2">
              {/* Table Header */}
              <div className="flex bg-pcbg text-white">
                <div className="table-cell flex-1 px-4 py-2 text-center border-b-4 border-white border-r-2">
                  Дата
                </div>
                <div className="table-cell flex-1 px-4 py-2 text-center border-b-4 border-white">
                  Время
                </div>
              </div>

              {/* Table Rows */}
              <div className="flex">
                <div className="table-cell flex-1 px-4 py-2 text-center border border-pcbg">
                  {entryTime.date}
                </div>
                <div className="table-cell flex-1 px-4 py-2 text-center border border-pcbg">
                  {entryTime.time}
                </div>
              </div>
            </div>

            {/* Tariff and Payment Info */}
          </div>
        </div>
        
        <div className="flex justify-center pl-6 gap-5 w-full mt-8 mb-5 text-4xl">
          <div className="bg-pcbg w-1/2 text-white font-semibold px-6 py-3 rounded-md">
            Тариф: <span className="text-green-400">суточный</span>
          </div>
          <div className="bg-pcbg w-1/2 text-white font-semibold px-6 py-3 rounded-md">
            К оплате: <span className="text-green-400">100 сом</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingCost;
