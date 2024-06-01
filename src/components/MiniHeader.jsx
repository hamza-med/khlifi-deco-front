import { useTranslation } from "react-i18next";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const MiniHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="mini-navbar">
      <div className="contact">
        <BiPhoneCall />
        <p>+216 50 577 433</p>
      </div>
      <p className="content">{t("miniHeader")}</p>
      <Link to="contact">
        <div className="contact-us">
          <AiOutlineMail />
          Contact
        </div>
      </Link>
    </div>
  );
};

export default MiniHeader;
