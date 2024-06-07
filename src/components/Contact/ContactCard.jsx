import { HStack, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactCard = () => {
  const { t } = useTranslation();
  const { phone, time, mobile, date1, date2, closed } = t("contact");
  const infoData = [
    {
      icon: <FaMapMarkerAlt />,
      title: t("footer.address"),
      text: "116, Lot el banafsaj, Jardins d’El Menzah 2, Tunis",
    },
    {
      icon: <FaPhoneAlt />,
      title: phone,
      text: `${mobile}: 21 453 379 `,
    },

    {
      icon: <FaClock />,
      title: time,
      text: `${date1} 9:00 - 19:00`,
      text1: `${date2} ${closed}`,
    },
  ];
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
              <div className="icon">{info.icon}</div>
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
