import "../style/navbar.css";

const Navbar = ({ currentLocation, handleSearchButton, locationToShow }) => {
  let currentValue = currentLocation;

  return (
    <>
      <nav>
        <div className="nav-heading">
          Good morning,{" "}
          <span>
            {" "}
            you are in <span className="highlight">
              {" "}
              {locationToShow}{" "}
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
