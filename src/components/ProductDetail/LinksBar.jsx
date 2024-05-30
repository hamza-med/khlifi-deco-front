import { Breadcrumb, BreadcrumbItem, useMediaQuery } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const LinksBar = ({ prodName, catData, subData }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div className="linksBar__wrapper">
      <Breadcrumb
        spacing={["5px", "6px", "10px"]}
        separator={<MdChevronRight style={{ fontSize: "20px" }} />}
      >
        {!isMobile && (
          <BreadcrumbItem>
            <Link to="/">
              <p className="linksBar__wrapper--link">Accueil</p>
            </Link>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem>
          <Link to={`/shop/${catData?.id}`}>
            <p className="linksBar__wrapper--link">
              {catData?.attributes?.title}
            </p>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to={`/shop/${catData?.id}?sub=${subData?.id}`}>
            <p className="linksBar__wrapper--link">
              {subData?.attributes?.title}
            </p>
          </Link>
        </BreadcrumbItem>

        <div className="divider" />
        <p className="prodName">{prodName}</p>
      </Breadcrumb>
    </div>
  );
};

export default LinksBar;
