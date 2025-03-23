import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";
import SingleInformationCard from "./cards/SingleInformationCard";
import { WiHumidity } from "react-icons/wi";
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
            secondaryTextLeft={data.location.country}
            mainTextRight={`${data.current.temp_c}°`}
            secondaryTextRight={`${data.current.temp_f}F`}
          />

          <div className="detailed-information-section">
            <SingleInformationCard
              icon={<WiHumidity />}
              information={data.current.humidity}
            />
            <SingleInformationCard icon={<WiHumidity />} information={""} />
            <SingleInformationCard icon={<WiHumidity />} information={""} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
