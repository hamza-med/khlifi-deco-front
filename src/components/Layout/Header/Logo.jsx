import { lazy } from "react";
import { Link } from "react-router-dom";
const Image = lazy(() => import("@/uilib/Image"));

const Logo = ({ isMobile }) => {
  return (
    <>
      <Link to="/">
        {isMobile ? (
          <Image
            src="/assets/logo_mobile_black.png"
            alt="desktop-logo"
            className="logo--mobile"
          />
        ) : (
          <Image
            src="/assets/logo_desktop_black.png"
            alt="mobile-logo"
            className="logo"
          />
        )}
      </Link>
    </>
  );
};

export default Logo;
