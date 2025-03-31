const ForecastcastCard = ({ heading, forcastData }) => {
  if (Array.isArray(forcastData)) {
    forcastData.map((element) => console.log(element));
  } else {
    console.log(forcastData);
  }
  return (
    <>
      <div className="card forcast-card">
        <h1 className="card-sub-heading"> {heading}</h1>
        <section className="forcast-section flex-grow"></section>
      </div>
    </>
  );
};

export default ForecastcastCard;
