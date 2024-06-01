import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const ContactCard = lazy(() => import("@/components/Contact/ContactCard"));
const ContactForm = lazy(() => import("@/components/Contact/ContactForm"));

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact_wrapper">
      <div className="contact_title">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.desc")}</p>
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
