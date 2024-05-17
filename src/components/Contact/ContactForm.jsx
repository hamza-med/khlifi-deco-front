import Input from "@/uilib/Input";
import Textarea from "@/uilib/Textarea";
import { contactSchema } from "@/utils/schemas";
import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const defaultValues = {
  subject: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div className="contact_form_wrapper">
      <h1 className="contact_form_title">Contactez-Nous</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Sujet"
          name="subject"
          placeholder="service client"
          control={control}
          className="contact_input"
        />
        <Input
          label="Adresse email"
          name="email"
          placeholder="votre@email.com"
          control={control}
          className="contact_input"
        />
        <Textarea
          label="Message"
          name="message"
          placeholder="Comment pouvons-nous aider ?"
          control={control}
          className="contact_input"
        />
        <Button
          type="submit"
          isDisabled={!isDirty || Object.entries(errors).length !== 0}
          isLoading={false}
          bgColor="rgba(79, 64, 43)"
          _hover={{
            bgColor: "rgba(79, 64, 43,0.8)",
          }}
          color="white"
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
