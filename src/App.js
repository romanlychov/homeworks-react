import style from './App.module.css';
import MainPeople from './Components/SWAPI/Main/MainPeople';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from './Components/SWAPI/Header/Header';
import MainPlanets from './Components/SWAPI/Main/MainPlanets';
import MainStarships from './Components/SWAPI/Main/MainStarships';
import { useState } from 'react';

const App = () => {
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

  const showList = (wasClicked) => {
    switch (wasClicked) {
      case 'people':
        return <MainPeople request={request} />;
      case 'planets':
        return <MainPlanets request={request} />;
      case 'starships':
        return <MainStarships request={request} />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Header fetchData={fetchData} />
      {showList(wasClicked)}
      <div className={style.center}>
        <BeatLoader color="#ff6" loading={loading} size={75} />
      </div>
    </div>
  );
}

export default App;

