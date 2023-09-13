import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/uilib/Input";
import { Button } from "@chakra-ui/react";

const BillingForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  const onSubmit = (data) => console.log("data", data);
  const {
    control,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          required={true}
          label="Email"
          name="email"
          control={control}
          placeholder="email"
        />
        <Input
          name="password"
          label="Password"
          control={control}
          placeholder="password"
        />
        <Button type="submit" loading={isSubmitting} disabled={!isDirty}>
          Save
        </Button>
      </form>
    </>
  );
};

export default BillingForm;
