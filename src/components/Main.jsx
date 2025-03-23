import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";

const Main = ({ data }) => {
  return (
    <main>
      <header>
        <ClockCard data={data} />
      </header>
      <section>
        <div className="general-information-section">
          <LocationInformationCard
            mainTextLeft={data.location.name}
            secondaryTextLeft={`Humidity ${data.current.humidity}`}
            mainTextRight={`${data.current.temp_c}°`}
            secondaryTextRight={`${data.current.temp_c}F`}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
