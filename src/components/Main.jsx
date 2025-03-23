import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";
import LocationInformationCard from "./cards/LocationInformationCard";

const Main = ({ data }) => {
  console.log(data);

  return (
    <main>
      <header>
        <ClockCard data={data} />
      </header>
      <section>
        <div className="general-information-section">
          <LocationInformationCard data={data} />
          <LocationInformationCard data={data} />
          <LocationInformationCard data={data} />
        </div>
      </section>
    </main>
  );
};

export default Main;
