const CardHeading = ({ mainText, secondaryText }) => {
  return (
    <>
      <div className="">
        <h1>{mainText}</h1>
        <h1 className=""> {secondaryText}</h1>
      </div>
    </>
  );
};

export default CardHeading;
