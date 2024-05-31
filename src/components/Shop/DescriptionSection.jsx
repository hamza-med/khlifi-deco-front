import { useTranslation } from "react-i18next";
import { BiSupport } from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";
import { GrTrophy } from "react-icons/gr";
import { PiSealCheck } from "react-icons/pi";

const DescriptionSectionItem = ({ title, description, icon }) => {
  return (
    <div className="description__wrapper--item">
      {icon}
      <div className="description__wrapper--item--content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const DescriptionSection = () => {
  const { t } = useTranslation();
  const { title1, title2, title3, title4, desc1, desc2, desc3, desc4 } = t(
    "shop.descriptionSec"
  );
  const descriptionData = [
    {
      id: 1,
      title: `${title1}`,
      description: `${desc1}`,
      icon: <GrTrophy style={{ fontSize: "2.8rem" }} />,
    },
    {
      id: 2,
      title: `${title2}`,
      description: `${desc2}`,
      icon: <PiSealCheck style={{ fontSize: "3.4rem" }} />,
    },
    {
      id: 3,
      title: `${title3}`,
      description: `${desc3}`,
      icon: <BsDoorOpen style={{ fontSize: "3.2rem" }} />,
    },
    {
      id: 4,
      title: `${title4}`,
      description: `${desc4}`,
      icon: <BiSupport style={{ fontSize: "3.2rem" }} />,
    },
  ];

  return (
    <div className="description__wrapper">
      {descriptionData.map((el) => {
        return (
          <DescriptionSectionItem
            key={el.id}
            title={el.title}
            description={el.description}
            icon={el.icon}
          />
        );
      })}
    </div>
  );
};

export default DescriptionSection;
