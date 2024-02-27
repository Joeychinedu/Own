import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          style={{ maxHeight: "5.5rem" }}
          src="../../images/logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
