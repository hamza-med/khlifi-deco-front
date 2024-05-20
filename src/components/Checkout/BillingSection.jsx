import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { createOrder } from "@/api/makeRequest";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { checkoutSchema } from "@/utils/schemas";
import { useDisclosure } from "@chakra-ui/react";
import CheckoutModal from "./CheckoutModal";
const defaultValues = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  enterprise: "",
  address: {
    state: "",
    city: "",
    street: "",
    postal: "",
  },
};

const BillingSection = () => {
  const { cartItems, subtotal, removeAll } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty, errors, isSubmitSuccessful },
    ...methods
  } = useForm({
    defaultValues,
    resolver: yupResolver(checkoutSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    var today = new Date();
    var tzOffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(today - tzOffset)
      .toISOString()
      .slice(0, -1)
      .replace("T", " ");

    try {
      setLoading(true);
      await createOrder({
        data: {
          total: subtotal,
          products: cartItems,
          creationDate: localISOTime,
          ...values,
        },
      });
    } catch (e) {
      setError(true);
    }
    setLoading(false);
    removeAll();
  };

  useEffect(() => {
    isSubmitSuccessful && reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...methods}>
      <form className="billing__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <BillingForm errors={errors} control={control} />
        <BillingInfo
          onOpen={onOpen}
          isDisabled={
            !isDirty ||
            Object.entries(errors).length !== 0 ||
            error ||
            cartItems.length === 0
          }
          isLoading={loading}
        />
      </form>
      <CheckoutModal isOpen={isOpen} onClose={onClose} />
    </FormProvider>
  );
};

export default BillingSection;
