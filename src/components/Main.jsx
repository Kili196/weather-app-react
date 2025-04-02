import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";
import SingleInformationCard from "./cards/SingleInformationCard";
import ForecastcastCard from "./cards/ForecastCard";
import Container from "./Container";
import MainSection from "./MainSection";
import { Map, Marker } from "pigeon-maps";

const Main = ({ data }) => {
  return (
    <main className="main--background">
      <Container className={"main"}>
        <section className="main--flex-column">
          <header>
            <ClockCard data={data} />
          </header>
          <section className="main--flex-column flex-1">
            <MainSection heading={"Todays highlight"}>
              <LocationInformationCard
                secondaryTextLeft={data.location.name}
                mainTextLeft={data.location.country}
                secondaryTextRight={`${data.current.temp_c}°`}
                mainTextRight={`${data.current.temp_f}F`}
              />

              <section className="main--grid-singleinformation">
                <SingleInformationCard
                  headline={"Huminidty"}
                  information={data.current.humidity}
                  unit={"%"}
                />
                <SingleInformationCard
                  headline={"Wind-speed"}
                  information={data.current.wind_kph}
                  unit={"km/h"}
                />
                <SingleInformationCard
                  headline={"Feels like"}
                  information={data.current.feelslike_c}
                  unit={"°"}
                />
                <SingleInformationCard
                  headline={"Wind direction"}
                  information={data.current.wind_dir}
                />
              </section>
            </MainSection>
            <MainSection heading={"Todays highlight"} classname={"flex-1"}>
              {" "}
              <Map
                center={[data.location.lat, data.location.lon]}
                defaultZoom={11}
              >
                <Marker
                  width={50}
                  anchor={[data.location.lat, data.location.lon]}
                />
              </Map>
            </MainSection>
          </section>
        </section>
        <section className="main__forecast"></section>
      </Container>
    </main>
  );
};

export default Main;
