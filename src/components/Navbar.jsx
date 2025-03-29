import "../style/navbar.css";
import { useState } from "react";
import Container from "../components/Container";

const Navbar = ({ handleSearchButton, data, startValue }) => {
  const [searchValue, setSearchValue] = useState(startValue);

  return (
    <>
      <Container>
        <nav>
          <div className="nav-heading">
            <h2>
              Good morning,
              <span>
                you are in{" "}
                <span className="location-highlight">
                  {data.location.name}, {data.location.country}
                </span>
              </span>
            </h2>
          </div>
          <div className="nav-inputs">
            <div className="input-field">
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
      </Container>
    </>
  );
};

export default Navbar;
