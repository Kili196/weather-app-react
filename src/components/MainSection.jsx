import "../style/main.css";

const MainSection = ({ children, heading }) => {
  return (
    <>
      <h2 className=""> {heading}</h2>
      {children}
    </>
  );
};

export default MainSection;
