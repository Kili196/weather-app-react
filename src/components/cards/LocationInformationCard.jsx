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

        <div className="card-heading">37° </div>
      </div>
    </>
  );
};

export default LocationInformationCard;
