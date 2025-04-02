import "../style/main.css";

const MainSection = ({ children, heading, classname }) => {
  return (
    <>
      <h2> {heading}</h2>
      <div className={classname}> {children}</div>
    </>
  );
};

export default MainSection;
