import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ShopBreadCrumbs = ({ catTitle, subTitle, catId }) => {
  return (
    <div className="shop_header">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"
        alt="shop-bg"
        className="shop_header__image"
      />
      <div className="shop_header__text">
        <div className="shop_header__text--content">
          <h1>Magasin</h1>
          <Breadcrumb
            spacing="2px"
            separator={<MdChevronRight style={{ fontSize: "20px" }} />}
          >
            <BreadcrumbItem fontWeight="600">
              <Link to="/">
                <p>Home</p>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={`/shop/${catId}`}>
                <p>{catTitle}</p>
              </Link>
            </BreadcrumbItem>
            {subTitle && (
              <BreadcrumbItem>
                <p>{subTitle}</p>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default ShopBreadCrumbs;
