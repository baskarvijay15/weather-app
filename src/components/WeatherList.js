import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row className="m-0">
           {weathers.map(({dt,main,weather,description, wind}) => (
                <Col xs={6} lg={2} sm={4} md={4} key={dt}>
                    <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} description={weather[0].description} icon={weather[0].icon} wind={wind}/>
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;
