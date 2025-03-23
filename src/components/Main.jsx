import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";
import SingleInformationCard from "./cards/SingleInformationCard";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";

const Main = ({ data }) => {
  console.log(data);
  return (
    <main>
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
                icon={<WiHumidity size={60} />}
                information={`${data.current.humidity}%`}
              />
              <SingleInformationCard
                icon={<TiWeatherWindy size={60} />}
                information={`${data.current.wind_kph}km/h`}
              />
            </div>
          </div>
          <div> dsads</div>
        </div>
        <div className="right-side"></div>
      </section>
    </main>
  );
};

export default Main;
