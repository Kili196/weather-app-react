const SingleInformationCard = ({ headline, information, unit }) => {
  return (
    <>
      <div className="card">
        <h1 className="card--secondary-heading"> {headline}</h1>
        <div className="">
          <label className="card-heading">
            {information} <label className=""> {unit}</label>
          </label>
        </div>
      </div>
    </>
  );
};

export default SingleInformationCard;
