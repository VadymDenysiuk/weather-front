import axios from "axios";
import { ILocalStorageRequests, IWeather } from "../types";
import saveToLocalStorage from "../utils/saveToLocalStorage";

const getWeather = async (city: string): Promise<IWeather[]> => {
  const storedRequests: ILocalStorageRequests[] = JSON.parse(
    localStorage.getItem("weatherRequests") || "[]"
  );
  const request = storedRequests.find((item) => item.city === city);

  if (request) {
    const { timestamp, data } = request;
    if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
      return data;
    }
  }

  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = `user-${Math.floor(Math.random() * 10000000000)}`;
    localStorage.setItem("userId", userId);
  }

  const apiUrl = process.env.REACT_APP_API_URL ?? "";

  try {
    const response = await axios.post(`${apiUrl}weather`, {
      city,
      userId,
    });

    saveToLocalStorage(city, response.data);

    return response.data;
  } catch (error) {
    console.log(error, "err");
  }

  return [];
};

export default getWeather;
