import "../style/main.css";

const MainSection = ({ children, heading }) => {
  return (
    <>
      <h2 className="section-heading"> {heading}</h2>
      {children}
    </>
  );
};

export default MainSection;
