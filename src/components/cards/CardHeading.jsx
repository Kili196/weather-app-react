const CardHeading = ({ mainText, secondaryText }) => {
  return (
    <>
      <div className="card-heading">
        <label>{mainText}</label>
        <label className="card-heading-highlight"> {secondaryText}</label>
      </div>
    </>
  );
};

export default CardHeading;
