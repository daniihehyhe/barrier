import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Для навигации

const menuItems = [
  { title: "Редактирование Парковки", path: "/admin/redaktirovaine_parkovki" },
  { title: "Редактирование ДПМ", path: "/admin/redaktirovaine_dpm" },
  { title: "Настройки тарифов", path: "/admin/tarif_settings" },
  { title: "Настройки экспорта данных", path: "/admin/export_settings" },
  { title: "Настройки сети", path: "/admin/network_settings" },
  { title: "Глубокие настройки", path: "/admin/advanced_settings" },
];

const AdminPage = () => {
  const [timer, setTimer] = useState({
    days: 'xx',
    hours: 'xx',
    minutes: 'xx',
    seconds: 'xx',
  });
  
  const navigate = useNavigate(); // Инициализация useNavigate для навигации

  useEffect(() => {
    const startDate = new Date('2024-09-01T00:00:00');

    const updateTimer = () => {
      const currentDate = new Date();
      const totalSeconds = Math.floor((currentDate - startDate) / 1000);

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimer({
        days: `${days} суток`,
        hours: `${hours} часы`,
        minutes: `${minutes} минуты`,
        seconds: `${seconds} секунды`,
      });
    };

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId); // Очистка интервала при размонтировании
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Меню кнопок */}
      <div className="menu-container flex flex-col items-center">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)} // Переход на соответствующую страницу
            className="menu-button bg-pcbg text-white font-bold py-3 px-8 my-2 rounded-lg w-72 text-center transition duration-300 hover:bg-bghov"
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Кнопки "Назад" и "Окно оператора" */}
      <div className="button-container mt-8 flex gap-4">
        <a href="#" className="button back bg-pcbg text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-bghov">
          Назад
        </a>
        <a href="/" className="button operator bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red-600">
          Окно оператора
        </a>
      </div>

      {/* Таймер */}
      <div className="timer-container text-center mt-10">
        <h3 className="text-xl font-bold text-pcbg mb-4">Время работы после включения</h3>
        <div className="timer-box inline-flex justify-around p-4 border-2 border-gray-300 rounded-lg bg-gray-100 w-96">
          <span className="timer-unit text-lg text-pcbg px-4 border-r border-gray-300">{timer.days}</span>
          <span className="timer-unit text-lg text-pcbg px-4 border-r border-gray-300">{timer.hours}</span>
          <span className="timer-unit text-lg text-pcbg px-4 border-r border-gray-300">{timer.minutes}</span>
          <span className="timer-unit text-lg text-pcbg px-4">{timer.seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
