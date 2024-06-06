import { Link } from "react-router-dom";

const Logo = ({ isMobile }) => {
  return (
    <div className="logo">
      <Link to="/">
        {isMobile ? (
          <img src="/assets/logo_mobile_black.png" alt="logo" className="logo--mobile" />
        ) : (
          <img src="/assets/logo_desktop_black.png" alt="logo" className="logo" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
