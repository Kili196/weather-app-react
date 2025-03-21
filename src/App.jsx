import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  function getWeatherData(city) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    setIsLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=4&aqi=no&alerts=no`
    )
      .then((response) => {
        setIsLoading(true);
        if (response.ok) {
          setIsLoading(false);
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }

  //call when component mounts
  useEffect(() => {
    getWeatherData("Vienna");
  }, []);

  function handleSearchButton(value) {
    getWeatherData(value);
  }

  return (
    <>
      <Layout>
        {data != null && (
          <Navbar handleSearchButton={handleSearchButton} data={data} />
        )}
        {data != null && <Main data={data} />}
      </Layout>
    </>
  );
};

export default App;
