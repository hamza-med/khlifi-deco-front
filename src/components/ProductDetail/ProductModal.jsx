import { useShoppingCart } from "@/hooks/useShoppingCart";
import Reservation from "@/uilib/DatePicker/Reservation";
import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProductModal = ({ dates = [], isOpen, onClose, prodId }) => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { defineQuantity, cartItems, subtotal } = useShoppingCart();

  const [productQuantity, setProductQuantity] = useState(1);
  const [item, setItem] = useState();
  const { t } = useTranslation();
  const { continuer, title, total, article, confirm } = t(
    "productDetail.productModal"
  );
  const articles = t("productDetail.productModal.articles", {
    number: cartItems?.length,
  });

  useEffect(
    () => setItem(cartItems.find((item) => item?.id === prodId)),
    [cartItems, prodId]
  );

  const handleClose = () => {
    onClose();
    defineQuantity(item?.id, productQuantity);
  };
  useEffect(() => {
    setProductQuantity(item?.quantity);
  }, [item?.quantity]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="0px"
        minW={["100%", "100%", "fit-content"]}
        minH={["60%", "68px", "68px"]}
      >
        <ModalHeader
          textAlign={isMobile ? "left" : "center"}
          p="0.8em"
          bgColor="#ac8f67"
          color="white"
          fontSize={["1rem", "1rem", "1.2rem"]}
          fontWeight="500"
        >
          {title}
        </ModalHeader>
        <ModalCloseButton color="rgba(0,0,0,0.4)" />
        <ModalBody className="product-modal__wrapper">
          <div className="left">
            <div className="left--img">
              <img src={item?.src} alt="" />
            </div>
            <div className="left--description">
              <h1>{item?.title}</h1>
              <p className="left--description--price">{item?.price} TND</p>
              <p className="left--description--reservation">
                <Reservation
                  start={dates.length !== 0 ? dates[0] : item?.start}
                  end={dates.length !== 0 ? dates[1] : item?.end}
                  id={prodId}
                  //borderColor="white"
                  fontSize="1.1rem"
                  //pl="0"
                />
              </p>
              <p className="left--description--quantity">
                <span className="title-bold ">{t("cart.quantity")}</span>
                <HStack
                  border="1px solid rgba(0,0,0,0.05)"
                  fontSize={["1rem", "1rem"]}
                >
                  <Text
                    cursor="pointer"
                    onClick={() =>
                      setProductQuantity((prev) =>
                        prev !== 1 ? prev - 1 : prev
                      )
                    }
                    p="5px 10px"
                    as="span"
                    borderRight="1px solid rgba(0,0,0,0.05)"
                  >
                    &minus;
                  </Text>
                  <Text as="span" p="5px">
                    {productQuantity}
                  </Text>
                  <Text
                    cursor="pointer"
                    borderLeft="1px solid rgba(0,0,0,0.05)"
                    p="5px 10px"
                    as="span"
                    onClick={() => setProductQuantity((prev) => prev + 1)}
                  >
                    &#43;
                  </Text>
                </HStack>
              </p>
            </div>
          </div>
          <div className="right">
            <h1>{cartItems.length > 1 ? articles : article}</h1>
            <span className="right--total">
              <span className="title-bold ">{total} </span>
              <span>{subtotal} TND</span>
            </span>

            <button className="continue-button" onClick={handleClose}>
              {continuer}
            </button>
            <button
              className="confirm-button"
              onClick={() => {
                navigate("/checkout");
                handleClose();
              }}
            >
              {confirm}
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
