import "../style/main.css";

import ClockCard from "../components/cards/ClockCard";

const Main = ({ data }) => {
  console.log(data);

  return (
    <main>
      <header>
        <ClockCard data={data} />
      </header>
      <section> </section>
    </main>
  );
};

export default Main;
