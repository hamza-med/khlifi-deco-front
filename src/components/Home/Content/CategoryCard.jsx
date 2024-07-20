import { Box, Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
const Image = lazy(() => import("@/uilib/Image"));

const CategoryCard = ({ item, id }) => {
  return (
    <Box p="5px">
      <Link to={`shop/${id}`}>
        <div className="home-categories__images--container">
          <Suspense fallback={<Skeleton height={["350px","400px"]} width={["100%","300px"]} />}>
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
    </Box>
  );
};

export default CategoryCard;
