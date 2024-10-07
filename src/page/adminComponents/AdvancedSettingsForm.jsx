import React, { useState } from 'react';

const AdvancedSettingsForm = () => {
  const [setting1, setSetting1] = useState('');
  const [setting2, setSetting2] = useState('');
  const [setting3, setSetting3] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      setting1,
      setting2,
      setting3,
    };

    fetch('http://your-server-address.com/api/advanced-settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full md:w-4/6 lg:w-3/6 xl:w-3/6 p-8 bg-pcbg shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Глубокие настройки</h2>

        {/* Поля формы */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="setting1">Настройка 1:</label>
          <input
            type="text"
            id="setting1"
            value={setting1}
            onChange={(e) => setSetting1(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="setting2">Настройка 2:</label>
          <input
            type="text"
            id="setting2"
            value={setting2}
            onChange={(e) => setSetting2(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="setting3">Настройка 3:</label>
          <input
            type="text"
            id="setting3"
            value={setting3}
            onChange={(e) => setSetting3(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <button type="submit" className="w-full py-3 bg-pcbg text-white font-semibold rounded-lg hover:bg-bghov transition duration-300 ease-in-out shadow-lg">
          Сохранить
        </button>
      </form>

      <a
        href="/admin"
        className="w-full md:w-4/6 lg:w-3/6 xl:w-3/6 py-3 bg-red-600 text-white font-bold rounded-lg transition duration-300 hover:bg-red-700 text-center mt-6"
      >
        Меню
      </a>
    </div>
  );
};

export default AdvancedSettingsForm;
