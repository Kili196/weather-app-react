import "../style/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-heading">
          Good morning,{" "}
          <span>
            {" "}
            you are in <span className="highlight"> England, London </span>{" "}
          </span>
        </div>
        <div className="flex-row gap center">
          <div className="input-container">
            <input placeholder="SEARCH LOCATION" />
            <button> ENTER</button>
          </div>
          <div> ds</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
