import React, { useState, useEffect } from 'react';

const ParkingPlaceAmounts = () => {
  const [availableSpots, setAvailableSpots] = useState(0);  // Количество свободных мест
  const [occupiedSpots, setOccupiedSpots] = useState(0);    // Количество занятых мест

  useEffect(() => {
    // Здесь будет логика для получения данных с сервера.
    // Для примера задаем значения вручную.
    const fetchParkingData = async () => {
      // Имитация данных с сервера
      const data = {
        available: 23,   // Получено с сервера
        occupied: 13,    // Получено с сервера
      };
      setAvailableSpots(data.available);
      setOccupiedSpots(data.occupied);
    };

    fetchParkingData();
  }, []);

  return (
    <div className=" text-white text-2xl flex items-center gap-5  rounded-lg w-fit ">
      <div className=" font-bold">
        СВОБОДНЫХ МЕСТ: <span className="text-green-400">{availableSpots}</span>
      </div>
      <div className=" font-bold text-3xl">|</div>
      <div className=" font-bold">
        ЗАНЯТО: <span className="text-red-400">{occupiedSpots}</span>
      </div>
    </div>
  );
};

export default ParkingPlaceAmounts;
