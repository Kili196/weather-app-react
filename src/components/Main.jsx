import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";
import SingleInformationCard from "./cards/SingleInformationCard";
import Container from "./Container";

const Main = ({ data }) => {
  console.log(data);
  return (
    <main>
      <Container className={"main-grid"}>
        <section className="left-side">
          <header>
            <ClockCard data={data} />
          </header>
          <section className="information-section">
            <LocationInformationCard
              mainTextLeft={data.location.name}
              secondaryTextLeft={data.location.country}
              mainTextRight={`${data.current.temp_c}°`}
              secondaryTextRight={`${data.current.temp_f}F`}
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
          </section>
        </section>
        <section className="right-side"></section>
      </Container>
    </main>
  );
};

export default Main;
