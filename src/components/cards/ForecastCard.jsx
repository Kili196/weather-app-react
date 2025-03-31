const ForecastcastCard = ({ heading, forcastData }) => {
  console.log(forcastData);
  return (
    <>
      <div className="card forcast-card">
        <h1 className="card-sub-heading"> {heading}</h1>
        <section className="forcast-section flex-grow">
          {forcastData.hour.map((element) => {
            return (
              <li>
                {" "}
                {element.time} {element.condition.text}{" "}
                {<img src={element.condition.icon} width={50} />}
              </li>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default ForecastcastCard;
