import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Components/SWAPI/ErrorPage/ErrorPage';
import HomePage from './Components/SWAPI/HomePage/HomePage';
import LoginPage from './Components/SWAPI/LoginPage/LoginPage';
import SWAPI from './SWAPI';

const App = () => {

  const [isLogin, setIsLogin] = useState(false);

  const loginToggler = () => {
    setIsLogin(!isLogin);
  }

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<LoginPage isLogin={isLogin} loginToggler={loginToggler} />} />
      {isLogin ? <Route path='/SWAPI/*' element={<SWAPI />} /> : null}
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );

}

export default App;

