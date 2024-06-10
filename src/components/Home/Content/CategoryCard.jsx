import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
const Image = lazy(() => import("@/uilib/Image"));

const CategoryCard = ({ item, id }) => {
  return (
    <Link to={`shop/${id}`}>
      <div className="home-categories__images--container">
        <Suspense>
          <Image
            className="home-categories__images--container--item"
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt={item?.title}
          />
        </Suspense>

        <h2>{item?.attributes?.title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
