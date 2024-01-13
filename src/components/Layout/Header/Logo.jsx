import { Link } from "react-router-dom";

const Logo = ({ isMobile }) => {
  return (
    <div className="logo">
      <Link to="/">
        {isMobile ? (
          <img src="assets/logo1.png" alt="logo" className="logo--mobile" />
        ) : (
          <img src="assets/deco.jpg" alt="logo" className="logo" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
