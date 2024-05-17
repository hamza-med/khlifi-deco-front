import ContactCard from "@/components/Contact/ContactCard";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="contact_content">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
