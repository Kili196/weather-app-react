const CardHeading = ({ mainText, secondaryText }) => {
  return (
    <>
      <div className="card-heading">
        <h1>{mainText}</h1>
        <h2 className="card-heading-highlight"> {secondaryText}</h2>
      </div>
    </>
  );
};

export default CardHeading;
