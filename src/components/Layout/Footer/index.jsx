import { HStack } from "@chakra-ui/react";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";
const Image = lazy(() => import("@/uilib/Image"));

const Footer = () => {
  const { t } = useTranslation();
  const {
    address,
    links,
    shop,
    about,
    website,
    copyright,
    aboutDesc,
    serviceTitle,
    service1,
    service2,
    service3,
    service4,
    service5,
  } = t("footer");
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--item">
          <Image
            src="/assets/logo_mobile_black.png"
            alt="footer-logo"
            className="footer__top--item--img"
          />
          <div className="footer__top--logo">
            <Link to="https://www.facebook.com/profile.php?id=61559900512195&mibextid=LQQJ4d">
              <GrFacebook className="footer__top--logo--1" />
            </Link>
            <Link to="https://www.instagram.com/khelifi_conseils">
              <GrInstagram className="footer__top--logo--2" />
            </Link>
            <Link to="www.linkedin.com/in/khelifi-conseils-et-services">
              <GrLinkedin className="footer__top--logo--3" />
            </Link>
          </div>
          <span>
            <span className="contact-info">{address}: </span>16, Lot el
            banafsaj, Jardins d’El Menzah 2, Tunis
          </span>
        </div>
        <div className="footer__top--item">
          <h1>{links}</h1>
          <Link to="home">
            <span>{t("shop.home")}</span>
          </Link>
          <Link>
            <span>{shop}</span>
          </Link>
          <Link to="contact">
            <span>Contact</span>
          </Link>
        </div>
        <div className="footer__top--item item-1">
          <h1>{serviceTitle}</h1>
          <span>{service1}</span>
          <span>{service2}</span>
          <span>{service3}</span>
          <span>{service4}</span>
          <span>{service5}</span>
        </div>
        <div className="footer__top--item">
          <h1>{about}</h1>
          <span>{aboutDesc}</span>
        </div>
        <div className="footer__top--item">
          <h1>Contact</h1>
          <ul role="list">
            <li>
              <HStack>
                <span className="contact-info">Whatsapp:</span>
                <span>(+216) 21 453 379</span>
              </HStack>
            </li>
            <li>
              <HStack>
                <span className="contact-info">{website}:</span>
                <span>www.khelificonseilsetservices.tn</span>
              </HStack>
            </li>
            <li>
              <HStack>
                <span className="contact-info">Email: </span>
                <span>youssefkhlifi18@gmail.com</span>
              </HStack>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__bottom--logo">
          Khelifi conseils & services
        </span>
        <span className="footer__bottom--copyright">&copy; {copyright}</span>
      </div>
    </div>
  );
};

export default Footer;
