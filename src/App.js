import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config'
import WeatherList from './components/WeatherList';

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2 className="text-white">Error : {error}</h2>
    if(!data && isLoading) return <h2 className="text-white">LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container fluid className="App bg" >
    <Container>
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}data/2.5/forecast?q=${city}&cnt=6&appid=${API_KEY}&units=metric`)} />
      {getContent()}
    </Container>
    </Container>
  );
};

export default App;