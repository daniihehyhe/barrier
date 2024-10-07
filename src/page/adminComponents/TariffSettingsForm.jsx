import React, { useState } from 'react';

const TariffSettingsForm = () => {
  const [tariffName, setTariffName] = useState('');
  const [tariffRate, setTariffRate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      tariffName,
      tariffRate,
    };

    fetch('http://your-server-address.com/api/tariffs', {
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
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Настройки тарифов</h2>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="tariffName">Название тарифа:</label>
          <input
            type="text"
            id="tariffName"
            value={tariffName}
            onChange={(e) => setTariffName(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="tariffRate">Тарифная ставка:</label>
          <input
            type="text"
            id="tariffRate"
            value={tariffRate}
            onChange={(e) => setTariffRate(e.target.value)}
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

export default TariffSettingsForm;
