const SingleInformationCard = ({ headline, information, unit }) => {
  return (
    <>
      <div className="card flex-grow single-information-card">
        <h1 className="single-information-headline "> {headline}</h1>
        <div className="flex-grow center">
          <label className="single-information-detail">
            {information} <label className=""> {unit}</label>
          </label>
        </div>
      </div>
    </>
  );
};

export default SingleInformationCard;
