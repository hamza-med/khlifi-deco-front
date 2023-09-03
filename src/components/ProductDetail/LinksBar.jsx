import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const LinksBar = ({ prodName, catData, subData }) => {
  return (
    <div className="linksBar__wrapper">
      <Breadcrumb
        spacing={["5px", "6px", "10px"]}
        separator={<MdChevronRight style={{ fontSize: "20px" }} />}
      >
        <BreadcrumbItem>
          <Link to="/">
            <p className="linksBar__wrapper--link">Home</p>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={`/shop/${catData?.id}`}>
            <p className="linksBar__wrapper--link">
              {catData?.attributes?.title}
            </p>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to={`/shop/${catData?.id}/sub/${subData?.id}`}>
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
