import React, { useState, useEffect } from 'react';
import car_number from '../../assets/car_number.jfif';

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

const ParkingInfoPage = () => {
  const [lastEntry, setLastEntry] = useState(generateRandomDateTime());
  const [lastExit, setLastExit] = useState(generateRandomDateTime());
  const [lastCarNumber, setLastCarNumber] = useState(generateRandomCarNumber());

  const [prevEntry, setPrevEntry] = useState(generateRandomDateTime());
  const [prevExit, setPrevExit] = useState(generateRandomDateTime());
  const [prevCarNumber, setPrevCarNumber] = useState(generateRandomCarNumber());

  // Обновление случайных данных каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setLastEntry(generateRandomDateTime());
      setLastExit(generateRandomDateTime());
      setLastCarNumber(generateRandomCarNumber());
      
      setPrevEntry(generateRandomDateTime());
      setPrevExit(generateRandomDateTime());
      setPrevCarNumber(generateRandomCarNumber());
    }, 5000); // Обновление каждые 5 секунд

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, []);

  return (
    <div className="flex justify-evenly p-4 my-10">
      {/* Последняя запись */}
      <div className="flex gap-5 bg-white shadow-2xl p-4 rounded-lg">
        {/* Верхняя часть: Фото и номер */}
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src={car_number} alt="Car plate" className="w-60 h-24 rounded-lg object-cover" />
          <div className="flex items-center border-2 border-pcbg p-2 rounded-lg">
            <div className="mr-2 text-center border-pcbg border-r-2 pr-3">
              <div className="text-3xl font-bold">08</div>
              <div className="text-red-600">KG</div>
            </div>
            <div className="text-3xl font-bold">{lastCarNumber}</div>
          </div>
        </div>

        {/* Информация о последней записи */}
        <div>
          <h3 className="text-2xl text-center font-bold text-pcbg">Последняя</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <h4 className="text-pcbg text-xl text-center">Въезд</h4>
              <div className="w-full max-w-xs mx-auto text-lg my-2">
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
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {lastEntry.date}
                  </div>
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {lastEntry.time}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-pcbg text-xl text-center">Выезд</h4>
              <div className="w-full max-w-xs mx-auto text-lg my-2">
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
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {lastExit.date}
                  </div>
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {lastExit.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Предыдущая запись */}
      <div className="flex gap-5 bg-white shadow-2xl p-4 rounded-lg">
        {/* Верхняя часть: Фото и номер */}
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src={car_number} alt="Car plate" className="w-60 h-24 rounded-lg object-cover" />
          <div className="flex items-center border-2 border-pcbg p-2 rounded-lg">
            <div className="mr-2 text-center border-pcbg border-r-2 pr-3">
              <div className="text-3xl font-bold">08</div>
              <div className="text-red-600">KG</div>
            </div>
            <div className="text-3xl font-bold">{prevCarNumber}</div>
          </div>
        </div>

        {/* Информация о предыдущей записи */}
        <div>
          <h3 className="text-2xl text-center font-bold text-pcbg">Предыдущая</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <h4 className="text-pcbg text-xl text-center">Въезд</h4>
              <div className="w-full max-w-xs mx-auto text-lg my-2">
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
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {prevEntry.date}
                  </div>
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {prevEntry.time}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-pcbg text-xl text-center">Выезд</h4>
              <div className="w-full max-w-xs mx-auto text-lg my-2">
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
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {prevExit.date}
                  </div>
                  <div className="table-cell flex-1 px-4 py-2 text-center border border-blue-500">
                    {prevExit.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingInfoPage;
