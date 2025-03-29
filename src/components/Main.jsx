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
        <header>
          <ClockCard data={data} />
        </header>
        <section>
          <div className="left-side">
            <div className="general-information-section">
              <LocationInformationCard
                mainTextLeft={data.location.name}
                secondaryTextLeft={data.location.country}
                mainTextRight={`${data.current.temp_c}°`}
                secondaryTextRight={`${data.current.temp_f}F`}
              />

              <div className="detailed-information-section">
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
              </div>
            </div>
            <div> dsads</div>
          </div>
          <div className="right-side"></div>
        </section>
      </Container>
    </main>
  );
};

export default Main;
