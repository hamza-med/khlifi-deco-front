import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { createOrder } from "@/api/makeRequest";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { checkoutSchema } from "@/utils/schemas";
const defaultValues = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  enterprise: "",
  address: {
    street: "",
    city: "",
    postal: "",
  },
};

const BillingSection = () => {
  const { cartItems, subtotal } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
    try {
      setLoading(true);
      await createOrder({
        data: {
          total: subtotal,
          products: cartItems,
          ...values,
        },
      });
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    isSubmitSuccessful && reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...methods}>
      <form className="billing__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <BillingForm errors={errors} control={control} />
        <BillingInfo
          isDisabled={!isDirty || Object.entries(errors).length !== 0 || error}
          isLoading={loading}
        />
      </form>
    </FormProvider>
  );
};

export default BillingSection;
