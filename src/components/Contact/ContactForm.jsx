import { sendEmail } from "@/api/makeRequest";
import Input from "@/uilib/Input";
import Textarea from "@/uilib/Textarea";
import { contactSchema } from "@/utils/schemas";
import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  firstname: "",
  lastname: "",
  subject: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty, errors, isSubmitSuccessful },
  } = useForm({
    defaultValues,
    resolver: yupResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await sendEmail({
        from: values.email,
        to: "utilisation13@gmail.com",
        subject: values.subject,
        html: `<h4>${values.firstname} ${values.lastname}</h4><p>${values.message}</p>`,
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
    <div className="contact_form_wrapper">
      <h1 className="contact_form_title">Contactez-Nous</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact_form_name">
          <Input
            label="Nom"
            name="firstname"
            placeholder="votre nom"
            control={control}
            className="contact_input"
          />
          <Input
            label="Prénom"
            name="lastname"
            placeholder="votre prénom"
            control={control}
            className="contact_input"
          />
        </div>
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
          isDisabled={!isDirty || error || Object.entries(errors).length !== 0}
          isLoading={loading}
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
