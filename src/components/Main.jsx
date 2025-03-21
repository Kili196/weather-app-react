import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";

const Main = ({ data }) => {
  console.log(data);

  return (
    <main>
      <ClockCard />
      <ClockCard />
      <ClockCard />
      <ClockCard />
      <ClockCard />
      <ClockCard />
    </main>
  );
};

export default Main;
