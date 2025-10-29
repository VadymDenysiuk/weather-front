import axios from 'axios';
import { ILocalStorageRequests, IWeather } from '../types';
import saveToLocalStorage from '../utils/saveToLocalStorage';

const getWeather = async (city: string): Promise<IWeather[]> => {
    const storedRequests: ILocalStorageRequests[] = JSON.parse(
        localStorage.getItem('weatherRequests') || '[]',
    );
    const request = storedRequests.find((item) => item.city === city);

    if (request) {
        const { timestamp, data } = request;
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
            return data;
        }
    }

    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = `user-${Math.floor(Math.random() * 10000000000)}`;
        localStorage.setItem('userId', userId);
    }

    const apiUrl = 'http://34.207.205.146:8080/';
    const API = '/api';

    try {
        const response = await axios.post(`${API}/weather`, {
            city,
            userId,
        });

        saveToLocalStorage(city, response.data);

        return response.data;
    } catch (error) {
        console.log(error, 'err');
    }

    return [];
};

export default getWeather;
