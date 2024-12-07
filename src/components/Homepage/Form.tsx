import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import getWeather from "../../service/get-weather";
import { IWeather } from "../../types";
import Spinner from "../shared/Spinner/Spinner";

interface IFormValues {
  city: string;
}

const HomeForm: React.FC<{
  setWeather: React.Dispatch<React.SetStateAction<IWeather | null>>;
  setIsActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNonValidResult: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setWeather, setIsActiveForm, setIsNonValidResult }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    setIsLoading(true);
    const { city } = values;
    setIsActiveForm(false);
    const weather = await getWeather(city.toLowerCase());

    if (weather.length > 0) {
      setWeather(weather[0]);
      resetForm();
      setIsNonValidResult(false);
    } else {
      setIsNonValidResult(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="homeform">
      {" "}
      {isLoading ? <Spinner /> : null}
      <Formik
        initialValues={{
          city: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="homeform__form">
          <label className="homeform__field">
            <span className="homeform__label">Enter the city</span>
            <Field
              className="homeform__input"
              type="text"
              name="city"
              maxLength={60}
              placeholder={"Start entering the name of the city"}
              required
              onFocus={() => setIsActiveForm(true)}
              onBlur={() => setIsActiveForm(false)}
            />
          </label>{" "}
          <button disabled={isLoading} className="homeform__button">
            Submit
          </button>
        </Form>
      </Formik>
      <a
        href="/list"
        className="home__history-button home__history-button--desk"
      >
        Show history
      </a>
    </div>
  );
};

export default HomeForm;
