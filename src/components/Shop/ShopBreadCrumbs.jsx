import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { MdChevronRight } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
const Image = lazy(() => import("@/uilib/Image"));

const ShopBreadCrumbs = ({ catTitle, subTitle, catId, type }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const subId = searchParams.get("sub");
  const { home } = t("shop");

  return (
    <div className="shop_header">
      <Image
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
            {subTitle && subId && (
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
