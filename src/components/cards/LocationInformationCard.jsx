const LocationInformationCard = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-heading">
          <label> {data.location.name} </label>
          <label className="card-heading-highlight">
            {" "}
            Humidity {data.current.humidity}
          </label>
        </div>

        <div className="card-heading">
          {" "}
          <label> {data.current.temp_c}° </label>
          <label className="card-heading-highlight center">
            {" "}
            {data.current.temp_f}f{" "}
          </label>
        </div>
      </div>
    </>
  );
};

export default LocationInformationCard;
