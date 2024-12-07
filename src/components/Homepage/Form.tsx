import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import getWeather from "../../service/get-weather";
import { IWeather } from "../../types";

interface IFormValues {
  city: string;
}

const HomeForm: React.FC<{
  setWeather: React.Dispatch<React.SetStateAction<IWeather | null>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setIsActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setWeather, setCity, setIsActiveForm }) => {
  const handleSubmit = async (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    const { city } = values;
    const weather = await getWeather(city.toLowerCase());
    setCity(city);

    if (weather.length > 0) setWeather(weather[0]);
    resetForm();
  };

  return (
    <div className="homeform">
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
          <button className="homeform__button">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default HomeForm;
