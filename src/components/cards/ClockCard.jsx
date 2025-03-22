import { useEffect, useState } from "react";
import "../../style/card.css";
import { DateTime } from "luxon";

const ClockCard = ({ data }) => {
  const [date, setDate] = useState(DateTime.now().setZone(data.location.tz_id));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(DateTime.now().setZone(data.location.tz_id));
    }, 1000);

    return () => clearInterval(interval);
  }, [data.location.tz_id]);
  return (
    <div className="card clock-card">
      {date.toFormat("hh:mm:ss")} {date.toFormat("a")}
    </div>
  );
};

export default ClockCard;
