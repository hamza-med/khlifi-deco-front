import { BiSupport } from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";
import { GrTrophy } from "react-icons/gr";
import { PiSealCheck } from "react-icons/pi";

const DescriptionSection = () => {
  return (
    <div className="description__wrapper">
      <div className="description__wrapper--item">
        <GrTrophy style={{ fontSize: "2.8rem" }} />
        <div className="description__wrapper--item--content">
          <h1>Haute qualité</h1>
          <p>Matériaux de qualité</p>
        </div>
      </div>
      <div className="description__wrapper--item">
        <PiSealCheck style={{ fontSize: "3.4rem" }} />
        <div className="description__wrapper--item--content">
          <h1>Protection de la garantie</h1>
          <p>Plus de 2 ans</p>
        </div>
      </div>
      <div className="description__wrapper--item">
        <BsDoorOpen style={{ fontSize: "3.2rem" }}/>
        <div className="description__wrapper--item--content">
          <h1>show room</h1>
          <p>Ouvert de 9h00 à 17h00</p>
        </div>
      </div>
      <div className="description__wrapper--item">
        <BiSupport style={{ fontSize: "3.2rem" }} />
        <div className="description__wrapper--item--content">
          <h1>24 / 7 Support</h1>
          <p>Support dédié</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
