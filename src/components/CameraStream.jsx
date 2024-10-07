import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import kg from '../assets/kg.png'

const CameraStream = ({ size }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-start">
      <CameraCard
        url='http://10.10.1.56/hls/stream_1.m3u8'
        cameraName='Выезд главный'
        payment='140 COM'
        carNumber='100 AAA'
        entryDate='01.01.2024'
        flag='08 KG'
        size={size}
        showDetails={true}
      />

      <CameraCard
        url='http://10.10.1.56/hls/stream_2.m3u8'
        cameraName='Выезд южный'
        payment='200 COM'
        carNumber='200 BBB'
        entryDate='02.01.2024'
        flag='08 KG'
        size={size}
        showDetails={false} // Здесь нет кнопок и информации
      />

      <CameraCard
        url='http://10.10.1.56/hls/stream_3.m3u8'
        cameraName='Въезд главный'
        payment='200 COM'
        carNumber='300 CCC'
        entryDate='03.01.2024'
        flag='08 KG'
        size={size}
        showDetails={true}
      />

      <CameraCard
        url='http://10.10.1.56/hls/stream_4.m3u8'
        cameraName='юга-северный'
        payment='200 COM'
        carNumber='400 DDD'
        entryDate='04.01.2024'
        flag='08 KG'
        size={size}
        showDetails={false} // Здесь нет кнопок и информации
      />
    </div>
  );
};

const CameraCard = ({ url, cameraName, payment, carNumber, entryDate, flag, size, showDetails }) => {
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

  const sizeClasses = {
    medium: 'w-[500px] h-[400px]',   // Увеличена высота
    large: 'w-[800px] h-[580px]',
    mediumPleer: "w-[495px] h-[254px]",
    largePleer: "w-[796px] h-[405px]"
  };

  const toggleBarrier = () => {
    setBarrierStatus(!barrierStatus);
    alert(barrierStatus ? 'Шлагбаум закрыт' : 'Шлагбаум открыт');
  };

  return (
    <div className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${sizeClasses[size[0]] || sizeClasses.medium}`}>
      {/* Название камеры */}
      <div className="bg-black text-white p-2 text-lg font-semibold">
        {cameraName}
      </div>

      {/* Видео-плеер */}
      <div>
        <video
        autoPlay
        muted
          ref={videoRef}
          controls
          className={`${sizeClasses[size[1]]} `}
        />
      </div>

      {/* Условное отображение деталей и кнопки */}
      {showDetails && (
        <div className="p-4 bg-bg_barrier h-[30%] flex justify-between items-center">
          <div>
            <div className="flex items-center bg-gray-200 mb-4 rounded-lg p-1 border-2 border-gray-300">
              <span className="flex flex-col items-center justify-center text-gray-700 p-1 rounded-md text-xs">
                {flag}
                <img
                  src={kg} 
                  alt="flag" 
                  className="w-5 h-4 mr-1"
                />
              </span>
              <span className="text-lg font-semibold px-2 py-1">
                {carNumber}
              </span>
            </div>
          </div>

          <div className="text-left text-white mb-4">
            <p className="text-base">
              Дата въезда: <span className="text-gray-500">{entryDate}</span>
            </p>
            <p className="text-base">
              К оплате: <span className="text-green-600 font-bold">{payment}</span>
            </p>
          </div>

          {/* Кнопка закрытия шлагбаума */}
          <button
            onClick={toggleBarrier}
            className={`px-4 py-2 rounded ${barrierStatus ? 'bg-red-700' : 'bg-green-500'} text-white`}
          >
            {barrierStatus ? 'Закрыть' : 'Открыть'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CameraStream;
