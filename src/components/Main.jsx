import "../style/main.css";

const Main = ({ data }) => {
  console.log(data);

  return <main>{data.location.country}</main>;
};

export default Main;
