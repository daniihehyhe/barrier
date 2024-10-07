import React, { useState } from 'react';

const ExportSettingsForm = () => {
  const [fileName, setFileName] = useState('');
  const [format, setFormat] = useState('CSV'); // По умолчанию выбран формат CSV

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      fileName,
      format,
    };

    fetch('http://your-server-address.com/api/export-settings', {
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
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Настройки экспорта данных</h2>

        {/* Поля формы */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="fileName">Имя файла:</label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="format">Формат экспорта:</label>
          <select
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          >
            <option value="CSV">CSV</option>
            <option value="JSON">JSON</option>
            <option value="XML">XML</option>
          </select>
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

export default ExportSettingsForm;
