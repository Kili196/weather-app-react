import "../../style/card.css";

const ClockCard = ({ data }) => {
  const date = new Date(data.location.localtime);
  return (
    <div className="card card-padding clock-card">
      {" "}
      {date.getHours()} : {date.getMinutes()}
    </div>
  );
};

export default ClockCard;
