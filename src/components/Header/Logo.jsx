import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/src/assets/deco.jpg" alt="logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
