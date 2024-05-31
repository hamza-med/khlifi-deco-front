import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ShopBreadCrumbs = ({ catTitle, subTitle, catId, type }) => {
  const { t } = useTranslation();

  const { home } = t("shop");

  return (
    <div className="shop_header">
      <img
        src="/assets/living-room.jpg"
        alt="shop-bg"
        className="shop_header__image"
      />
      <div className="shop_header__text">
        <div className="shop_header__text--content">
          <h1>{type}</h1>
          <Breadcrumb
            spacing="2px"
            separator={<MdChevronRight style={{ fontSize: "20px" }} />}
          >
            <BreadcrumbItem fontWeight="600">
              <Link to="/">
                <p>{home}</p>
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
