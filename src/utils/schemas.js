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
  email: yup.string().email("L'email doit être un email valide"),
  // .required("Veuillez saisir votre adresse e-mail"),
  address: yup.object().shape({
    state: yup.string().required("Ce champ est obligatoire"),
    city: yup.string().required("Ce champ est obligatoire"),
    postal: yup.string().required("Ce champ est obligatoire"),
  }),
});

export const loginSchema = yup.object().shape({
  identifier: yup.string().required("Ce champ est obligatoire"),
  password: yup
    .string()
    .required("Aucun mot de passe n'est fourni")
    .min(
      6,
      "Le mot de passe est trop court - il devrait être composé de 6 caractères au minimum."
    )
    .matches(
      /[a-zA-Z]/,
      "Le mot de passe ne peut contenir que des lettres latines."
    ),
});
export const registerSchema = yup.object().shape({
  username: yup.string().required("Veuillez saisir votre nom d'utilisateur"),
  email: yup
    .string()
    .email("l'email doit être un email valide")
    .required("Veuillez saisir votre adresse e-mail"),
  password: yup
    .string()
    .required("Aucun mot de passe n'est fourni")
    .min(
      6,
      "Le mot de passe est trop court - il devrait être composé de 6 caractères au minimum."
    )
    .matches(
      /[a-zA-Z]/,
      "Le mot de passe ne peut contenir que des lettres latines."
    ),
});
export const contactSchema = yup.object().shape({
  subject: yup.string().required("Veuillez saisir le sujet"),
  email: yup
    .string()
    .email("l'email doit être un email valide")
    .required("Veuillez saisir votre adresse e-mail"),
  message: yup.string().required("Aucun message n'est fourni"),
});
