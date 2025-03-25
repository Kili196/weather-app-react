import "../style/navbar.css";
import { useState } from "react";

const Navbar = ({ handleSearchButton, data, startValue }) => {
  const [searchValue, setSearchValue] = useState(startValue);

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
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={() => handleSearchButton(searchValue)}>
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
