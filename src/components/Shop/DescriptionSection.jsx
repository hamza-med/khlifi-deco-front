import { BiSupport } from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";
import { GrTrophy } from "react-icons/gr";
import { PiSealCheck } from "react-icons/pi";

const descriptionData = [
  {
    id: 1,
    title: "Haute qualité",
    description: "Matériaux de qualité",
    icon: <GrTrophy style={{ fontSize: "2.8rem" }} />,
  },
  {
    id: 2,
    title: "Protection de la garantie",
    description: "Plus de 2 ans",
    icon: <PiSealCheck style={{ fontSize: "3.4rem" }} />,
  },
  {
    id: 3,
    title: "Show room",
    description: "Ouvert de 9h00 à 17h00",
    icon: <BsDoorOpen style={{ fontSize: "3.2rem" }} />,
  },
  {
    id: 4,
    title: "24 / 7 Support",
    description: "Support dédié",
    icon: <BiSupport style={{ fontSize: "3.2rem" }} />,
  },
];

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
