import "../style/navbar.css";

const Navbar = ({ currentLocation, setCurrentLocation }) => {
  let currentValue = currentLocation;

  function handleButtonClick() {
    setCurrentLocation(currentValue);
  }

  return (
    <>
      <nav>
        <div className="nav-heading">
          Good morning,{" "}
          <span>
            {" "}
            you are in <span className="highlight">
              {" "}
              {currentLocation}{" "}
            </span>{" "}
          </span>
        </div>
        <div className="flex-row gap center">
          <div className="input-container">
            <input
              placeholder="SEARCH LOCATION"
              onChange={(e) => (currentValue = e.target.value)}
            />
            <button onClick={handleButtonClick}> ENTER</button>
          </div>
          <div> ds</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
