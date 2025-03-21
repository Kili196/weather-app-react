import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  async function getWeatherData(city) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=4&aqi=no&alerts=no`
      );

      if (!isLoading) {
        setIsLoading(true);
      }

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  //call when component mounts
  useEffect(() => {
    const callApi = async () => {
      return getWeatherData("Vienna");
    };

    callApi().then((object) => setData(object));
    console.log(data);
  }, []);

  function handleSearchButton(value) {
    getWeatherData(value).then((object) => setData(object));
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
