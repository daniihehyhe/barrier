import React, { useState } from 'react';

const EditParkingForm = () => {
  const [formData, setFormData] = useState({
    parkingId: '',
    parkingName: '',
    totalSpaces: '',
    description: '',
    cameras: [{ name: '', rtspUrl: '' }],
  });

  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик изменения полей для камер
  const handleCameraChange = (index, field, value) => {
    const newCameras = [...formData.cameras];
    newCameras[index][field] = value;
    setFormData((prevState) => ({
      ...prevState,
      cameras: newCameras,
    }));
  };

  // Обработчик добавления новой камеры
  const handleAddCamera = () => {
    setFormData((prevState) => ({
      ...prevState,
      cameras: [...prevState.cameras, { name: '', rtspUrl: '' }],
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();

    // Отправляем POST запрос на сервер
    fetch('http://your-server-address.com/api/parking', {
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
    <div className="flex flex-col mt-10 justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full md:w-4/6 lg:w-3/6 xl:w-3/6 p-8 bg-pcbg shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Данные парковочного места</h2>

        {/* Поля формы */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="parkingId">ID парковки</label>
          <input
            type="text"
            id="parkingId"
            name="parkingId"
            value={formData.parkingId}
            onChange={handleInputChange}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="parkingName">Название парковки</label>
          <input
            type="text"
            id="parkingName"
            name="parkingName"
            value={formData.parkingName}
            onChange={handleInputChange}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="totalSpaces">Общее количество мест</label>
          <input
            type="text"
            id="totalSpaces"
            name="totalSpaces"
            value={formData.totalSpaces}
            onChange={handleInputChange}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="description">Описание</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 bg-bg_barrier text-white border-none rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
            rows="4"
          />
        </div>

        {/* Форма добавления камер */}
        <div className="bg-pcbg p-6 rounded-lg mb-6 shadow-lg">
          <h2 className="text-white text-2xl mb-4 text-center">Добавить Камеры</h2>
          {formData.cameras.map((camera, index) => (
            <div key={index} className="mb-6">
              <label className="text-white block mb-2">Название камеры</label>
              <input
                type="text"
                value={camera.name}
                onChange={(e) => handleCameraChange(index, 'name', e.target.value)}
                className="w-full p-3 mb-4 rounded-lg bg-bg_barrier text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
                placeholder="Введите название камеры"
              />
              <label className="text-white block mb-2">RTSP ссылка</label>
              <input
                type="text"
                value={camera.rtspUrl}
                onChange={(e) => handleCameraChange(index, 'rtspUrl', e.target.value)}
                className="w-full p-3 rounded-lg bg-bg_barrier text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-bghov"
                placeholder="Введите RTSP ссылку"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCamera}
            className="w-full py-3 bg-bghov text-white font-semibold rounded-lg hover:bg-bg_barrier transition duration-300 ease-in-out"
          >
            Добавить Камеру
          </button>
        </div>

        <button type="submit" className="w-full py-3 bg-pcbg text-white font-semibold rounded-lg hover:bg-bghov transition duration-300 ease-in-out shadow-lg">
          Сохранить
        </button>
      </form>

      <a
        href="/admin"
        className="w-full mb-10 md:w-4/6 lg:w-3/6 xl:w-3/6 py-3 bg-red-600 text-white font-bold rounded-lg transition duration-300 hover:bg-red-700 text-center mt-6"
      >
        Назад
      </a>
    </div>
  );
};

export default EditParkingForm;