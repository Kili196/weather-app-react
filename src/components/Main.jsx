import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";
import SingleInformationCard from "./cards/SingleInformationCard";
import Container from "./Container";
import MainSection from "./MainSection";
import { Map, Marker } from "pigeon-maps";

const Main = ({ data }) => {
  return (
    <main>
      <Container className={"main-grid"}>
        <section className="left-side">
          <header>
            <ClockCard data={data} />
          </header>
          <section className="information-section">
            <MainSection heading={"Todays highlight"}>
              <LocationInformationCard
                secondaryTextLeft={data.location.name}
                mainTextLeft={data.location.country}
                secondaryTextRight={`${data.current.temp_c}°`}
                mainTextRight={`${data.current.temp_f}F`}
              />

              <section className="single-information-section">
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
                  unit={"C"}
                />
                <SingleInformationCard
                  headline={"Wind direction"}
                  information={data.current.wind_dir}
                />
              </section>
            </MainSection>

            <MainSection heading={"Maps-Location"}>
              <div className="map-container">
                <Map
                  center={[data.location.lat, data.location.lon]}
                  defaultZoom={11}
                >
                  <Marker
                    width={50}
                    anchor={[data.location.lat, data.location.lon]}
                  />
                </Map>
              </div>
            </MainSection>
          </section>
        </section>
        <section className="">
          <div className="card"></div>
          <div className="card"></div>
        </section>
      </Container>
    </main>
  );
};

export default Main;
