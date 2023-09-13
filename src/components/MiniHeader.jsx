import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const MiniHeader = () => {
  return (
    <div className="mini-navbar">
      <div className="contact">
        <BiPhoneCall />
        <p>+216 50 577 433</p>
      </div>
      <p className="content">
        {" "}
        Meilleur organisateur d&apos; événements en tunisie{" "}
      </p>
      <div className="contact-us">
        <AiOutlineMail />
        Contact
      </div>
    </div>
  );
};

export default MiniHeader;
