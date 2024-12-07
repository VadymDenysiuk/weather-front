import React, { useState } from "react";
import Weather from "../components/Homepage/Weather";
import Form from "../components/Homepage/Form";
import { IWeather } from "../types";

const Home: React.FC = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [isActiveForm, setIsActiveForm] = useState<boolean>(false);
  const [isNonValidResult, setIsNonValidResult] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  return (
    <div className="home">
      <div className="home__container container">
        {isNonValidResult ? (
          <p className="home__title">
            The city you entered does not exist. Please try again.
          </p>
        ) : weather ? (
          <Weather weather={weather} city={city} isActiveForm={isActiveForm} />
        ) : (
          <h1 className="home__title">
            Hello, enter the city you are interested in.
          </h1>
        )}
        <Form
          setWeather={setWeather}
          setCity={setCity}
          setIsNonValidResult={setIsNonValidResult}
          setIsActiveForm={setIsActiveForm}
        />

        <a href="/list" className="home__history-button">
          Show history
        </a>
      </div>
    </div>
  );
};

export default Home;
