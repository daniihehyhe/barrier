import React, { useState } from 'react';

const NetworkSettingsForm = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [subnetMask, setSubnetMask] = useState('');
  const [gateway, setGateway] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      ipAddress,
      subnetMask,
      gateway,
    };

    fetch('http://your-server-address.com/api/network-settings', {
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
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Настройки сети</h2>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="ipAddress">IP адрес:</label>
          <input
            type="text"
            id="ipAddress"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="subnetMask">Маска подсети:</label>
          <input
            type="text"
            id="subnetMask"
            value={subnetMask}
            onChange={(e) => setSubnetMask(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="gateway">Шлюз:</label>
          <input
            type="text"
            id="gateway"
            value={gateway}
            onChange={(e) => setGateway(e.target.value)}
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

export default NetworkSettingsForm;
