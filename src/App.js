import style from './App.module.css';
import MainPeople from './Components/SWAPI/Main/MainPeople';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from './Components/SWAPI/Header/Header';
import MainPlanets from './Components/SWAPI/Main/MainPlanets';
import MainStarships from './Components/SWAPI/Main/MainStarships';
import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './Contexts/ThemeContext';

const App = () => {

  const { darkTheme } = useContext(ThemeContext);

  const [request, setRequest] = useState([]);
  const [wasClicked, setWasClicked] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async (request) => {
    setRequest([]);
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/${request}`)
    const jsonData = await response.json();
    setRequest(jsonData.results);
    setWasClicked(request);
    setLoading(false)
  }

  return (
    <div className={darkTheme ? style.dark : style.light}>
      <Header fetchData={fetchData} />

      <Routes>
        <Route path='people' element={<MainPeople request={request} />} />
        <Route path='planets' element={<MainPlanets request={request} />} />
        <Route path='starships' element={<MainStarships request={request} />} />
      </Routes>
      
      <div className={style.center}>
        <BeatLoader color="#ff6" loading={loading} size={75} />
      </div>
    </div>
  );
}

export default App;

