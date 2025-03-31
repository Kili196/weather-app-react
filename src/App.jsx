import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Container from "./components/Container";
import "./global-variables.css";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  //api call
  function getWeatherData(city) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    setIsLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=10&aqi=no&alerts=no`
    )
      .then((response) => {
        setIsLoading(true);
        if (response.ok) {
          setIsLoading(true);
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        setData(data);
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((error) => console.error(error))
      .finally(setIsLoading(false));
  }

  //call when component mounts
  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      getWeatherData("Vienna");
    } else {
      console.log(JSON.parse(localStorage.getItem("data")));
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  function handleSearchButton(value) {
    getWeatherData(value);
  }

  return (
    <>
      <Layout>
        {data != null && (
          <Navbar
            handleSearchButton={handleSearchButton}
            data={data}
            startValue={data.location.name}
          />
        )}
        {data != null && <Main data={data} />}
      </Layout>
    </>
  );
};

export default App;
