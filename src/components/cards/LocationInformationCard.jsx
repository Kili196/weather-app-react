import CardHeading from "./CardHeading";

const LocationInformationCard = ({
  mainTextLeft,
  secondaryTextLeft,
  mainTextRight,
  secondaryTextRight,
}) => {
  return (
    <>
      <div className="">
        <CardHeading
          mainText={mainTextLeft}
          secondaryText={secondaryTextLeft}
        />

        <CardHeading
          mainText={mainTextRight}
          secondaryText={secondaryTextRight}
        />
      </div>
    </>
  );
};

export default LocationInformationCard;
