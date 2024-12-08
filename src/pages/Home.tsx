import React, { useState } from "react";
import Weather from "../components/Homepage/Weather";
import Form from "../components/Homepage/Form";
import { IWeather } from "../types";

const Home: React.FC = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [isActiveForm, setIsActiveForm] = useState<boolean>(false);
  const [isNonValidResult, setIsNonValidResult] = useState<boolean>(false);

  return (
    <div className={`home ${isActiveForm && weather ? "active" : ""}`}>
      <div className="home__container container">
        <div className="home__top-wrapper">
          {isNonValidResult ? (
            <p className="home__title">
              The city you entered does not exist. Please try again.
            </p>
          ) : weather ? (
            <Weather weather={weather} isActiveForm={isActiveForm} />
          ) : (
            <h1 className="home__title">
              Hello, enter the city you are interested in.
            </h1>
          )}
        </div>
        <Form
          setWeather={setWeather}
          setIsNonValidResult={setIsNonValidResult}
          setIsActiveForm={setIsActiveForm}
        />

        <a
          href="/list"
          className="home__history-button home__history-button--mob"
        >
          Show history
        </a>
      </div>
    </div>
  );
};

export default Home;
