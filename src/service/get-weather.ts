import axios from "axios";
import { IWeather } from "../types";

const getWeather = async (city: string): Promise<IWeather[]> => {
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

    return response.data;
  } catch (error) {
    console.log(error, "err");
  }

  return [];
};

export default getWeather;
