const CardHeading = ({ mainText, secondaryText }) => {
  return (
    <>
      <div className="">
        <h1 className="card--secondary-heading">{mainText}</h1>
        <h1 className="card-heading"> {secondaryText}</h1>
      </div>
    </>
  );
};

export default CardHeading;
