import React, { useState } from 'react';

// Массив с данными автомобилей
const carData = [
  { car_number: "A123BC", entry_time: "2024-09-01T08:30:00", exit_time: "2024-09-01T10:45:00" },
  { car_number: "B456CD", entry_time: "2024-09-01T09:00:00", exit_time: "2024-09-01T11:15:00" },
  { car_number: "C789EF", entry_time: "2024-09-01T10:30:00", exit_time: "2024-09-01T12:00:00" },
  { car_number: "D012GH", entry_time: "2024-09-01T11:45:00", exit_time: "2024-09-01T13:30:00" },
  { car_number: "E345IJ", entry_time: "2024-09-01T14:00:00", exit_time: "2024-09-01T15:30:00" },
];

// Форматирование даты
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  // Функция поиска автомобиля
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 0) {
      const results = carData.filter((car) =>
        car.car_number.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCars(results);
    } else {
      setFilteredCars([]);
    }
  };

  // Функция выбора автомобиля из списка
  const selectCar = (car) => {
    setSelectedCar(car);
    setSearchTerm(car.car_number); // Заполнить input выбранным номером
    setFilteredCars([]); // Скрыть выпадающий список
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <div className="input_search_wrapper flex items-center border-2 border-gray-300 rounded-lg">
        <input
          className="search_input flex-grow p-2 text-gray-700 text-lg focus:outline-none"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Введите номер для поиска автомобиля"
        />
        <button className="search_btn bg-blue-700 text-white p-3 rounded-r-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </button>
      </div>

      {/* Выпадающий список предложений */}
      {filteredCars.length > 0 && (
        <ul className="bg-white border border-gray-300 mt-2 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filteredCars.map((car) => (
            <li
              key={car.car_number}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => selectCar(car)}
            >
              {car.car_number}
            </li>
          ))}
        </ul>
      )}

      {/* Отображение выбранного автомобиля */}
      {selectedCar && (
        <div className="selected-car bg-white border border-gray-300 mt-4 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Вы выбрали машину:</h3>
          <p><strong>Номер машины:</strong> {selectedCar.car_number}</p>
          <p><strong>Время въезда:</strong> {formatDate(selectedCar.entry_time)}</p>
          <p><strong>Время выезда:</strong> {selectedCar.exit_time ? formatDate(selectedCar.exit_time) : "Ещё не выехала"}</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
