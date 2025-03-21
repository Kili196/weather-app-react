import "../style/navbar.css";

const Navbar = ({ handleSearchButton, data }) => {
  let currentValue = "";

  return (
    <>
      <nav>
        <div className="nav-heading">
          Good morning,{" "}
          <span>
            {" "}
            you are in{" "}
            <span className="highlight">
              {data.location.name}, {data.location.country}
            </span>{" "}
          </span>
        </div>
        <div className="flex-row gap center">
          <div className="input-container">
            <input
              placeholder="SEARCH LOCATION"
              onChange={(e) => (currentValue = e.target.value)}
            />
            <button onClick={() => handleSearchButton(currentValue)}>
              {" "}
              ENTER
            </button>
          </div>
          <div> ds</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
