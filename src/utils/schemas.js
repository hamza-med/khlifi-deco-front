import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const checkoutSchema = yup.object().shape({
  firstname: yup.string().required("Veuillez saisir votre nom"),
  lastname: yup.string().required("Veuillez saisir votre prénom"),
  phone: yup
    .string()
    .required("Veuillez saisir votre numéro")
    .matches(phoneRegExp, "Le numéro de téléphone n'est pas valide"),
  email: yup
    .string()
    .email("l'email doit être un email valide")
    .required("Veuillez saisir votre adresse e-mail"),
  address: yup.object().shape({
    street: yup.string().required("Ce champ est obligatoire"),
    city: yup.string().required("Ce champ est obligatoire"),
    postal: yup.string().required("Ce champ est obligatoire"),
  }),
});