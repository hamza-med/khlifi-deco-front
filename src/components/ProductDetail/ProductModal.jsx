import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductModal = ({ isOpen, onClose, prodId }) => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { cartItems, subtotal } = useShoppingCart();
  const [item, setItem] = useState();
  useEffect(
    () => setItem(cartItems.find((item) => item?.id === prodId)),
    [cartItems, prodId]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
          Produit ajouté au panier avec succès
        </ModalHeader>
        <ModalCloseButton color="rgba(0,0,0,0.4)" />
        <ModalBody className="product-modal__wrapper">
          <div className="left">
            <div className="left--img">
              <img src={item?.src} alt="" />
            </div>
            <div className="left--description">
              <h1>{item?.title}</h1>
              <p className="left--description--price">
                {item?.price}00 TND H.T
              </p>
              <p className="left--description--reservation">
                <span className="title-bold ">Réservation : </span>{" "}
                {item?.start !== item?.end ? (
                  <span>
                    du {item?.start} jusqu&rsquo; au {item?.end}
                  </span>
                ) : (
                  <span>le {item?.start}</span>
                )}
              </p>
              <p className="left--description--quantity">
                <span className="title-bold ">Quantité:</span> {item?.quantity}
              </p>
            </div>
          </div>
          <div className="right">
            <h1>Il y a {cartItems?.length} article(s) dans votre panier</h1>
            <span className="right--total">
              <span className="title-bold ">Total produits (H.T) : </span>{" "}
              <span>{subtotal} TND</span>
            </span>

            <button className="continue-button" onClick={() => onClose()}>
              Continuer mes réservations
            </button>
            <button
              className="confirm-button"
              onClick={() => {
                navigate("/checkout");
                onClose();
              }}
            >
              Confirmer ma réservation
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
