import React from 'react';
import { IWeather } from '../../types';

const ListItem: React.FC<{ data: IWeather }> = ({ data }) => {
    return (
        <div className="list-item">
            <div className="list-item__left">
                <p className="list-item__city">{`${data.city} ${data.sys?.country}`}</p>
                <p className="list-item__condition">{data.weather[0]?.main}</p>
            </div>
            <div className="list-item__right">
                <p className="list-item__temp">{data.main?.temp?.toFixed()}°</p>
                <div className="list-item__icon">
                    <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0]?.icon}@4x.png`}
                        alt={data.weather[0]?.main}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListItem;
