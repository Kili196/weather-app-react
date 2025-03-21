import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";

const Main = ({ data }) => {
  console.log(data);

  return (
    <main>
      <ClockCard data={data} />
      <ClockCard data={data} />
      <ClockCard data={data} />
      <ClockCard data={data} />
      <ClockCard data={data} />
      <ClockCard data={data} />
    </main>
  );
};

export default Main;
