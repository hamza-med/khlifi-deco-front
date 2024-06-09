import { useTranslation } from "react-i18next";
import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const useYupSchema = () => {
  const { t } = useTranslation();
  const {
    name,
    lastName,
    phone,
    email,
    username,
    subject,
    message,
    subjectMax,
    requiredField,
    phoneMatches,
    emailValid,
    noPass,
    shortPass,
    passMatches,
  } = t("errorMessages");
  const checkoutSchema = yup.object().shape({
    firstname: yup.string().required(name),
    lastname: yup.string().required(lastName),
    phone: yup.string().required(phone).matches(phoneRegExp, phoneMatches),
    email: yup.string().email(emailValid).required(email),
    address: yup.object().shape({
      state: yup.string().required(requiredField),
      city: yup.string().required(requiredField),
      postal: yup.string().required(requiredField),
    }),
  });
  const loginSchema = yup.object().shape({
    identifier: yup.string().required(requiredField),
    password: yup
      .string()
      .required(noPass)
      .min(6, shortPass)
      .matches(/[a-zA-Z]/, passMatches),
  });
  const registerSchema = yup.object().shape({
    username: yup.string().required(username),
    email: yup.string().email(emailValid).required(email),
    password: yup
      .string()
      .required(noPass)
      .min(6, shortPass)
      .matches(/[a-zA-Z]/, passMatches),
  });
  const contactSchema = yup.object().shape({
    firstname: yup.string().required(name),
    lastname: yup.string().required(lastName),
    subject: yup.string().required(subject).max(50, subjectMax),
    email: yup.string().email(emailValid).required(email),
    message: yup.string().required(message),
  });
  return { contactSchema, registerSchema, loginSchema, checkoutSchema };
};
export default useYupSchema;
