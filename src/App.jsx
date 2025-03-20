import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState("Vienna");

  function handleSearchButton(value) {
    console.log(value);
    setCurrentLocation(value);
  }

  return (
    <>
      <Layout>
        <Navbar
          currentLocation={currentLocation}
          handleSearchButton={handleSearchButton}
        />
        <Main currentLocation={currentLocation} />
      </Layout>
    </>
  );
};

export default App;
