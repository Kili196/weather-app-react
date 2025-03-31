const ForecastcastCard = ({ heading, forcastData }) => {
  console.log(forcastData);

  const regex = /([\d]+:[\d]{2})(:[\d]{2})(.*)/;
  const replacement = "$1$3";

  return (
    <>
      <div className="card forcast-card">
        <h1 className="card-sub-heading"> {heading}</h1>
        <section className="forcast-section flex-grow">
          {forcastData.hour.map((element) => {
            const date = new Date(element.time);
            return (
              <li>
                <label>
                  {date.toLocaleTimeString().replace(regex, replacement)}{" "}
                </label>
                <label> {element.condition.text}</label>
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
