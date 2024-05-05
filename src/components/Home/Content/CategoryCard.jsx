import { Link } from "react-router-dom";

const CategoryCard = ({ item, id }) => {
  return (
    <Link to={`shop/${id}`}>
      <div className="home-categories__images--container">
        <div className="home-categories__images--container--item">
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt="img1"
          />
        </div>
        <h2>{item?.attributes?.title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
