import axios from 'axios';
import { IHistoryItem } from '../types';

const getHistory = async (): Promise<IHistoryItem[]> => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = `user-${Math.floor(Math.random() * 10000000000)}`;
        localStorage.setItem('userId', userId);
    }

    const API = '/api';

    try {
        const response = await axios.post(`${API}/history`, {
            userId,
            limit: 100,
        });

        return response.data;
    } catch (error) {
        console.log(error, 'err');
    }

    return [];
};

export default getHistory;
