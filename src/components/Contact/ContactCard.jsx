import { HStack, VStack } from "@chakra-ui/react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const infoData = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    text: "16 rue toborsok , bardo",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    text: "Mobile 57 755 433",
  },

  {
    icon: <FaClock />,
    title: "Horaire de travail",
    text: "Lundi-Vendredi: 9:00 - 19:00",
    text1: "Samedi-Dimanche: 9:00 - 19:00",
  },
];

const ContactCard = () => {
  return (
    <div className="contact_card_wrapper">
      <div className="contact_card_info">
        {infoData.map((info) => {
          return (
            <HStack
              className="contact_card"
              key={info.text}
              align="start"
              gap="1.5em"
            >
              <div style={{ fontSize: "27px" }}>{info.icon}</div>
              <VStack align="start">
                <h2>{info?.title}</h2>
                <span>{info.text}</span>
                <span>{info?.text1}</span>
              </VStack>
            </HStack>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCard;
