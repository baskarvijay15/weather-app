import React from 'react';
import {Card} from 'react-bootstrap';

import thunderstorm from '../images/Thunderstorm.png'
import drizzle from '../images/Drizzle.png'
import rain from '../images/Rain.png'
import snow from '../images/Snow.png'
import atmosphere from '../images/Atmosphere.png'
import clear from '../images/Clear.png'
import clouds from '../images/Cloudy.png'
import extreme from '../images/Extreme.png'
import defaultIcon from '../images/Partly-cloudy.png'
import umberella from '../images/icon-umberella.png'
import windIcon from '../images/icon-wind.png'

const WeatherCard = ({dt, temp_min, temp_max, main, description, wind}) => {
  const date = new Date(dt);
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let weatherIcon
  // const maxTemp = Math.round(temp_min)
  const minTemp = Math.round(temp_max)

  switch(main) {
    case 'Thunderstorm':
        weatherIcon = thunderstorm
        break
    case 'Drizzle':
        weatherIcon = drizzle
        break
    case 'Rain':
        weatherIcon = rain
        break
    case 'Snow':
        weatherIcon = snow
        break
    case 'Atmosphere':
        weatherIcon = atmosphere
        break
    case 'Clear':
        weatherIcon = clear
        break
    case 'Clouds':
        weatherIcon = clouds
        break
    case 'Extreme':
        weatherIcon = extreme
        break
    default:
      weatherIcon = defaultIcon
}

  return (
    <Card style={{marginBottom:'2em'}}>
      <Card.Title style={{textTransform: 'capitalize', padding:'7px 0', borderBottom:'1px solid lightgrey'}}>{(weekday[date.getDay()+1])} {date.getDate()+1}</Card.Title>
      <Card.Img
        variant="top"        
        src={`${weatherIcon}`}
        style={{padding:'20px'}}
      />
      <Card.Body style={{paddingTop:'0'}}>
        <span style={{fontSize:'28px',fontWeight:'bold'}}>{`${minTemp}°C`}</span> <br/>
        {/* <span>{`${maxTemp}°C`}</span> */}
        <span><img src={umberella} alt=""/> {description}</span> <br/>
        <span><img src={windIcon} alt="" /> {wind.deg} km/h</span>                        
      </Card.Body>
    </Card>
  );
};
export default WeatherCard;