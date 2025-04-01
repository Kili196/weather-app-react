const SingleInformationCard = ({ headline, information, unit }) => {
  return (
    <>
      <div className="">
        <h1 className=""> {headline}</h1>
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
