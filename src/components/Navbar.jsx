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
              <span className="">
                {data.location.name}, {data.location.country}
              </span>
            </h2>
          </div>
          <div className="nav__input_fields">
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
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
