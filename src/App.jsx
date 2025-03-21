import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [locationToShow, setLocationToShow] = useState("");

  async function getWeatherData(city) {
    console.log(city);
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

    callApi().then((object) =>
      setLocationToShow(`${object.location.name}, ${object.location.country}`)
    );
  }, []);

  function handleSearchButton(value) {
    getWeatherData(value).then((object) =>
      setLocationToShow(`${object.location.name}, ${object.location.country}`)
    );
  }

  return (
    <>
      <Layout>
        <Navbar
          handleSearchButton={handleSearchButton}
          locationToShow={locationToShow}
        />
        <Main />
      </Layout>
    </>
  );
};

export default App;
