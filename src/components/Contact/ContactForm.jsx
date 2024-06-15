import { sendEmail } from "@/api/makeRequest";
import useYupSchema from "@/hooks/useYupSchema";
import Input from "@/uilib/Input";
import Textarea from "@/uilib/Textarea";
import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const defaultValues = {
  firstname: "",
  lastname: "",
  subject: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const { contactSchema } = useYupSchema();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const {
    email,
    subject,
    btn,
    nameDesc,
    lastNameDesc,
    emailDesc,
    subjectDesc,
    messageDesc,
  } = t("contact.form");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact_form_name">
          <Input
            label={t("checkout.firstName")}
            name="firstname"
            placeholder={nameDesc}
            control={control}
            className="contact_input"
          />
          <Input
            label={t("checkout.lastName")}
            name="lastname"
            placeholder={lastNameDesc}
            control={control}
            className="contact_input"
          />
        </div>
        <Input
          label={subject}
          name="subject"
          placeholder={subjectDesc}
          control={control}
          className="contact_input"
        />
        <Input
          label={email}
          name="email"
          placeholder={emailDesc}
          control={control}
          className="contact_input"
        />
        <Textarea
          label="Message"
          name="message"
          placeholder={messageDesc}
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
          {btn}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
