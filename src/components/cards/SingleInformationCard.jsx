const SingleInformationCard = ({ icon, information }) => {
  return (
    <>
      <div className="card single-information-card">
        <span className="icon"> {icon}</span>
        <label> {information}</label>
      </div>
    </>
  );
};

export default SingleInformationCard;
