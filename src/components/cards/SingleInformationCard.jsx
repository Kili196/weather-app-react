const SingleInformationCard = ({ headline, information, unit }) => {
  return (
    <>
      <div className="card single-information-card">
        <h1 className="single-information-headline "> {headline}</h1>
        <div className="start flex-grow-1 ">
          <label className="">
            {information} <label className="unit-font-size"> {unit}</label>
          </label>
        </div>
      </div>
    </>
  );
};

export default SingleInformationCard;
