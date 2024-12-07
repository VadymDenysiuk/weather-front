import { IWeather, ILocalStorageRequests } from "../types";

const MAX_REQUESTS = 50;

const saveToLocalStorage = (city: string, data: IWeather) => {
  const storedRequests = JSON.parse(
    localStorage.getItem("weatherRequests") || "[]"
  );

  const existingRequestIndex = storedRequests.findIndex(
    (item: ILocalStorageRequests) => item.city === city
  );

  const newWeatherRequest = { city, timestamp: Date.now(), data };

  if (existingRequestIndex !== -1) {
    storedRequests[existingRequestIndex] = newWeatherRequest;
  } else {
    storedRequests.push(newWeatherRequest);
  }

  if (storedRequests.length > MAX_REQUESTS) {
    storedRequests.shift();
  }

  localStorage.setItem("weatherRequests", JSON.stringify(storedRequests));
};

export default saveToLocalStorage;
