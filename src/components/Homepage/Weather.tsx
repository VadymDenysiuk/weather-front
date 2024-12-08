import React, { useEffect, useState } from 'react';
import { IWeather } from '../../types';

const Weather: React.FC<{
    weather: IWeather;
    isActiveForm: boolean;
}> = ({ weather, isActiveForm }) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (weather) {
            setAnimationClass('animate');

            const timeout = setTimeout(() => setAnimationClass(''), 1000);

            return () => clearTimeout(timeout);
        }
    }, [weather]);

    return (
        <div className={`weather ${animationClass}`}>
            <div className={`weather__icon ${isActiveForm ? 'hide' : ''}`}>
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    alt={weather.weather[0]?.main}
                />
            </div>
            <h3 className="weather__city">{`${weather.city}, ${weather.sys.country}`}</h3>
            <h1 className="weather__temp">{weather.main.temp.toFixed()}°</h1>
            <p className="weather__condition">{weather.weather[0]?.main}</p>
        </div>
    );
};

export default Weather;
