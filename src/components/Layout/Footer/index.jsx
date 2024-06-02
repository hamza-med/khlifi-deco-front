import { HStack, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { t } = useTranslation();
  const { address, links, shop, about, website, copyright } = t("footer");
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--item">
          <img
            src="/assets/logo1.png"
            alt="footer-logo"
            style={isMobile ? { width: "180px", height: "170px" } : null}
          />
          <div className="footer__top--logo">
            <Link>
              <GrFacebook className="footer__top--logo--1" />
            </Link>
            <Link>
              <GrInstagram className="footer__top--logo--2" />
            </Link>
            <Link>
              <GrYoutube className="footer__top--logo--3" />
            </Link>
          </div>
          <span>
            <span className="contact-info">{address}: </span>16 rue toborsok ,
            bardo
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
        <div className="footer__top--item">
          <h1>{about}</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            illo hic quo vitae quae numquam autem laborum voluptate nulla enim
            placeat alias atque
          </span>
        </div>
        <div className="footer__top--item">
          <h1>Contact</h1>
          <ul role="list">
            <li>
              <HStack>
                <span className="contact-info">Whatsapp:</span>
                <span>(+216) 50 577 433</span>
              </HStack>
            </li>
            <li>
              <HStack>
                <span className="contact-info">{website}:</span>
                <span>www.khlifi-deco.com</span>
              </HStack>
            </li>
            <li>
              <HStack>
                <span className="contact-info">Email: </span>
                <span>Contact@khlifi-deco.com</span>
              </HStack>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__bottom--logo">Khlifi deco</span>
        <span className="footer__bottom--copyright">
          &copy; {copyright}
        </span>
      </div>
    </div>
  );
};

export default Footer;
