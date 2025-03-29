const SingleInformationCard = ({ headline, information, unit }) => {
  return (
    <>
      <div className="card flex-grow">
        <h1 className="single-information-headline "> {headline}</h1>
        <div className="">
          <label className="">
            {information} <label className=""> {unit}</label>
          </label>
        </div>
      </div>
    </>
  );
};

export default SingleInformationCard;
