import React, { useState } from 'react';

const carsData = [
  {
    carNumber: 'A123BC',
    entryTime: '2024-10-04T08:30:00',
    exitTime: '2024-10-04T10:00:00',
    parkingFee: 100, // Пример суммы за парковку
  },
  {
    carNumber: 'B456CD',
    entryTime: '2024-10-04T09:15:00',
    exitTime: '2024-10-04T11:45:00',
    parkingFee: 150,
  },
  {
    carNumber: 'C789EF',
    entryTime: '2024-10-04T07:45:00',
    exitTime: '2024-10-04T09:30:00',
    parkingFee: 120,
  },
  {
    carNumber: 'B456CD',
    entryTime: '2024-10-04T09:15:00',
    exitTime: '2024-10-04T11:45:00',
    parkingFee: 150,
  },
  {
    carNumber: 'C789EF',
    entryTime: '2024-10-04T07:45:00',
    exitTime: '2024-10-04T09:30:00',
    parkingFee: 120,
  },
  {
    carNumber: 'B456CD',
    entryTime: '2024-10-04T09:15:00',
    exitTime: '2024-10-04T11:45:00',
    parkingFee: 150,
  },
  {
    carNumber: 'C789EF',
    entryTime: '2024-10-04T07:45:00',
    exitTime: '2024-10-04T09:30:00',
    parkingFee: 120,
  },
];

function ParkingStatus() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Форматирование времени
  const formatTime = (timeString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(timeString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-3/6 p-8 bg-pcbg shadow-lg rounded-lg mt-10 mx-auto text-white">
      <h5 className="text-3xl font-bold text-center mb-8 uppercase tracking-wide">Недавние события</h5>

      <div className="mb-6">
        <p className="text-xl font-semibold">
          <strong>Действия:</strong>
          <span className="ml-2 text-2xl font-bold text-white">Заехал</span>
        </p>
      </div>

      <div className="mb-6">
        <p className="text-xl font-semibold">
          <strong>Номер авто:</strong>
          <span className="ml-2 text-2xl font-bold text-white">ФС123ЫВ</span>
        </p>
      </div>

      <div className="mb-6">
        <p className="text-xl font-semibold">
          <strong className="text-green-500">Время въезда:</strong>
          <span className="ml-2 text-2xl font-bold text-white">2024-10-04 08:30</span>
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold">
          <strong className="text-red-600">Время выезда:</strong>
          <span className="ml-2 text-2xl font-bold text-white">2024-10-04 10:00</span>
        </p>
      </div>

      {/* Кнопка История */}
      <button
        onClick={openModal}
        className="absolute bottom-10 right-10 px-6 py-3 bg-bghov text-white font-semibold rounded-full shadow-lg hover:bg-bg_barrier transition duration-300"
      >
        История
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-full md:w-3/6 bg-pcbg rounded-lg p-6 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-white">История последных 10ти машин</h2>

            <ul className="text-white">
              {carsData.map((car, index) => (
                <li key={index} className="mb-4 p-4 bg-bg_barrier rounded-lg shadow-md">
                  <p className="text-lg"><strong>Номер авто:</strong> {car.carNumber}</p>
                  <p className="text-lg"><strong>Время заезда:</strong> {formatTime(car.entryTime)}</p>
                  <p className="text-lg"><strong>Время выезда:</strong> {formatTime(car.exitTime)}</p>
                  <p className="text-lg"><strong>Сумма за парковку:</strong> {car.parkingFee} сом</p>
                </li>
              ))}
            </ul>

            {/* Кнопка закрытия модального окна */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ParkingStatus;
