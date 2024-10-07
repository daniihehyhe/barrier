import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import logo from '../assets/logo.svg';
import ParkingPlaceAmounts from "./ParkingPlaceAmounts";

const Header = ({ setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();

      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();
      const formattedDate = `${day}.${month}.${year}`;

      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const formattedTime = `${hours}:${minutes}`;

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(intervalId); 
  }, []);

  // Функция для обработки входа
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (login === "admin" && password === "admin") {
      setIsAuthenticated(true); // Меняем состояние аутентификации
      navigate("/admin"); // Перенаправляем на страницу администратора после успешного входа
    } else {
      setErrorMessage("Invalid login or password");
    }
  };

  // Переключение бургер-меню
  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 bg-bg_barrier text-white flex justify-between items-center relative">
      {/* Логотип */}
      <img src={logo} alt="logo" className="h-20" />
<ParkingPlaceAmounts/>

      {/* Текущая дата и время */}
      <p className="text-center text-2xl font-semibold">
        <span id="currentDate">{currentDate}</span> <span className="font-bold ml-3" id="currentTime">{currentTime}</span>
      </p>

      {/* Бургер-меню */}
      <div className="relative block">
        <div
          className={`group cursor-pointer flex flex-col items-center absolute top-0 right-2 z-50 ${
            isOpen ? 'close' : ''
          }`}
          onClick={toggleBurgerMenu}
        >
          <div
            className={`h-[3px] w-[30px] mb-[6px]  transition-all duration-300 ease-linear ${
              isOpen
                ? 'bg-red-500 transform rotate-45 translate-x-[7px] translate-y-[5px]'
                : 'group-hover:animate-slide1 bg-white'
            }`}
          ></div>
          <div
            className={`h-[3px] w-[30px] mb-[6px] bg-white transition-all duration-300 ease-linear ${
              isOpen ? 'opacity-0' : 'group-hover:animate-slide2'
            }`}
          ></div>
          <div
            className={`h-[3px] w-[30px]  transition-all duration-300 ease-linear ${
              isOpen
                ? 'bg-red-500 transform -rotate-45 translate-x-[7px] -translate-y-[13px]'
                : 'group-hover:animate-slide3 bg-white'
            }`}
          ></div>
        </div>
    
        {/* Меню при открытии */}
        {isOpen && (
          <div className="absolute top-12 right-0 bg-bg_barrier p-6 w-64 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Login</h2>
            <form className="auth_Form" id="loginForm" onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="login"
                  name="login"
                  placeholder="Login"
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                  required
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className="absolute right-2 top-2 cursor-pointer text-white"
                  id="togglePassword"
                  onClick={() => {
                    const passwordInput = document.getElementById("password");
                    passwordInput.type === "password"
                      ? (passwordInput.type = "text")
                      : (passwordInput.type = "password");
                  }}
                >
                  😑
                </i>
              </div>
              <button
                className="submit w-full p-2 bg-pcbg text-white rounded hover:bg-bghov"
                type="submit"
              >
                Enter
              </button>
              {errorMessage && (
                <div id="error-message" className="text-red-500 mt-2">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
