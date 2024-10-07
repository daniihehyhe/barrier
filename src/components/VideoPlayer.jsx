import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ url, cameraName, size }) => {
  const videoRef = useRef(null);
  const [barrierStatus, setBarrierStatus] = useState(false);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = url;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }
  }, [url]);

  // Функция для открытия видео на полный экран
  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  // Функция для управления шлагбаумом
  const toggleBarrier = () => {
    setBarrierStatus(!barrierStatus);
    alert(barrierStatus ? 'Шлагбаум закрыт' : 'Шлагбаум открыт');
  };

  // Определение размеров для маленького, среднего и большого плееров
  const sizeClasses = {
    small: 'w-[400] h-36',    // Маленький: 64px ширина и 36px высота
    medium: 'w-[500px] h-[350px]',   // Средний
    large: 'w-[800px] h-[450px]',   // Большой
    screen:"w-full h-full"
};

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      {/* Название камеры */}
      <h3 className="text-white text-sm font-bold bg-gray-900 p-2">{cameraName}</h3>
      
      {/* Видео плеер */}
      <video ref={videoRef} controls className={` bg-black ${sizeClasses[size]}`} />

      {/* Кнопки под плеером */}
      <div className="flex justify-between mt-4 p-2">
        <button
          onClick={handleFullScreen}
          className="bg-pcbg text-white px-4 py-2 rounded hover:bg-bghov"
        >
          На весь экран
        </button>
        <button
          onClick={toggleBarrier}
          className={`px-4 py-2 rounded ${barrierStatus ? 'bg-red-700' : 'bg-pcbg'} text-white`}
        >
          {barrierStatus ? 'Закрыть шлагбаум' : 'Открыть шлагбаум'}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
