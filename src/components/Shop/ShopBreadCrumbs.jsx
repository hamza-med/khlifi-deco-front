import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ShopBreadCrumbs = ({ catTitle, subTitle, catId, type }) => {
  return (
    <div className="shop_header">
      <img
        src="/assets/living-room.jpg"
        alt="shop-bg"
        className="shop_header__image"
      />
      <div className="shop_header__text">
        <div className="shop_header__text--content">
          {type === "panier" ? (
            <h1>Panier</h1>
          ) : type === "checkout" ? (
            <h1>Checkout</h1>
          ) : (
            <h1>Magasin</h1>
          )}
          <Breadcrumb
            spacing="2px"
            separator={<MdChevronRight style={{ fontSize: "20px" }} />}
          >
            <BreadcrumbItem fontWeight="600">
              <Link to="/">
                <p>Accueil</p>
              </Link>
            </BreadcrumbItem>
            {catTitle ? (
              <BreadcrumbItem>
                <Link to={`/shop/${catId}`}>
                  <p>{catTitle}</p>
                </Link>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <p>{type}</p>
              </BreadcrumbItem>
            )}
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
