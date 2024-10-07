import React, { useState } from 'react';

const carData = [
  {
    car_number: "A123BC",
    entry_time: "2024-09-01T08:30:00",
    exit_time: "2024-09-01T10:45:00",
  },
  {
    car_number: "B456CD",
    entry_time: "2024-09-01T09:00:00",
    exit_time: "2024-09-01T11:15:00",
  },
  {
    car_number: "C789EF",
    entry_time: "2024-09-01T10:30:00",
    exit_time: "2024-09-01T12:00:00",
  },
  {
    car_number: "D012GH",
    entry_time: "2024-09-01T11:45:00",
    exit_time: "2024-09-01T13:30:00",
  },
  {
    car_number: "E345IJ",
    entry_time: "2024-09-01T14:00:00",
    exit_time: "2024-09-01T15:30:00",
  },
];

const SearchCar = () => {
  const [carNumber, setCarNumber] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);

  // Форматирование даты для отображения
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const searchCar = () => {
    const normalizedCarNumber = carNumber.trim().toLowerCase(); // Normalize input
    const car = carData.find((car) => car.car_number.toLowerCase() === normalizedCarNumber);
    setSelectedCar(car || null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center mb-6">
        <input
          className="w-96 p-5 border-2 border-pcbg rounded-lg text-lg mr-4"
          type="text"
          id="carNumberInput"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
          placeholder="Введите номер для поиска автомобиля"
        />
        <button
          className="bg-pcbg hover:bg-bghov text-white px-7 py-4 rounded-lg"
          onClick={searchCar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          </svg>
        </button>
      </div>

      {selectedCar ? (
        <div className="bg-white p-4 border rounded-lg shadow-md w-96">
          <h3 className="text-lg font-bold mb-2">Вы выбрали машину:</h3>
          <p className="mb-2"><strong>Номер машины:</strong> {selectedCar.car_number}</p>
          <p className="mb-2"><strong>Время въезда:</strong> {formatDate(selectedCar.entry_time)}</p>
          <p className="mb-2"><strong>Время выезда:</strong> {selectedCar.exit_time ? formatDate(selectedCar.exit_time) : "Ещё не выехала"}</p>
        </div>
      ) : (
        carNumber && (
          <p className="text-red-500">Машина с таким номером не найдена.</p>
        )
      )}
    </div>
  );
};

export default SearchCar;
