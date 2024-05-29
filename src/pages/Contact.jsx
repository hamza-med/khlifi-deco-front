import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const ContactCard = lazy(() => import("@/components/Contact/ContactCard"));
const ContactForm = lazy(() => import("@/components/Contact/ContactForm"));

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="contact_title">
        <h1>Contactez Nous</h1>
        <p>
          Pour plus d’informations sur nos produits et services. N&apos;hésitez
          pas à nous envoyer un e-mail. Notre personnel est toujours là pour
          vous aider. N&apos;hésitez pas!
        </p>
      </div>
      <div className="contact_content">
        <Suspense fallback={<Skeleton />}>
          <ContactCard />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Contact;
