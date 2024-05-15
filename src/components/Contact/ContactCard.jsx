import { HStack } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const infoData = [
  { icon: <FaPhoneAlt />, text: "57 755 433" },
  { icon: <FaFacebookMessenger />, text: "Messenger" },
  { icon: <FaMapMarkerAlt />, text: "16 rue toborsok , bardo" },
  { icon: <FaEnvelope />, text: "Email: contact@hamza.com" },
];

const ContactCard = () => {
  return (
    <div className="contact_card_wrapper">
      <h1 className="contact_card_title">Besoin d&apos;aide ?</h1>
      <div className="contact_card_info">
        {infoData.map((info) => {
          return (
            <HStack className="contact_card" key={info.text}>
              <div style={{ fontSize: "22px", color: "rgba(79, 64, 43)" }}>
                {info.icon}
              </div>
              <span style={{ fontSize: "1.2rem" }}>{info.text}</span>
            </HStack>
          );
        })}
      </div>
      <h1 className="contact_card_title title2">Suivez-Nous</h1>
      <HStack gap="0.8em" fontSize="28px"  color="rgba(79, 64, 43)">
        <FaFacebook color="blue" />
        <FaInstagram color="FaInstagram" />
        <FaTiktok color="black" />
        <FaYoutube color="red" />
      </HStack>
    </div>
  );
};

export default ContactCard;
