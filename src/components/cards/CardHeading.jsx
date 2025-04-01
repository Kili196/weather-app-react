const CardHeading = ({ mainText, secondaryText }) => {
  return (
    <>
      <div className="">
        <h1>{mainText}</h1>
        <h2 className=""> {secondaryText}</h2>
      </div>
    </>
  );
};

export default CardHeading;
