import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--item">
          <img src="../../../assets/logo1.png" alt="footer-logo" />
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
            <span className="contact-info">Addresse: </span>16 rue toborsok ,
            bardo
          </span>
        </div>
        <div className="footer__top--item">
          <h1>Liens</h1>
          <Link>
            <span>Home</span>
          </Link>
          <Link>
            <span>Shop Now</span>
          </Link>
          <Link>
            <span>Contact</span>
          </Link>
        </div>
        <div className="footer__top--item">
          <h1>à propos de nous</h1>
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
              <span className="contact-info">Whatsapp : </span>
              <span>(+216) 50 577 433</span>
            </li>
            <li>
              <span className="contact-info">Website : </span>{" "}
              <span>www.khlifi-deco.com</span>
            </li>
            <li>
              <span className="contact-info">Email : </span>
              <span>Contact@khlifi-deco.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__bottom--logo">Khlifi deco</span>
        <span className="footer__bottom--copyright">
          &copy; Copyright 2023. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
