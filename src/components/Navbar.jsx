import "../style/navbar.css";
import { useState } from "react";
import Container from "../components/Container";

const Navbar = ({ handleSearchButton, data, startValue }) => {
  const [searchValue, setSearchValue] = useState(startValue);

  return (
    <>
      <Container>
        <nav>
          <div className="nav__heading">
            <h2> Good morning,</h2>
            <h2>
              {" "}
              you are in{" "}
              <span className="nav__heading--highlight">
                {data.location.name}, {data.location.country}
              </span>
            </h2>
          </div>
          <div className="nav__input-fields">
            <input
              placeholder="SEARCH LOCATION"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button
              className="button"
              onClick={() => handleSearchButton(searchValue)}
            >
              {" "}
              ENTER
            </button>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
