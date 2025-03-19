import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState("Vienna");

  return (
    <>
      <Layout>
        <Navbar
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
        <Main />
      </Layout>
    </>
  );
};

export default App;
