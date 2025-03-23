const SingleInformationCard = ({ headline, information, unit }) => {
  return (
    <>
      <div className="card single-information-card">
        <span className="single-information-headline "> {headline}</span>
        <div className="start flex-grow-1 ">
          <label className="">
            {information} <span className="unit-font-size"> {unit}</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default SingleInformationCard;
