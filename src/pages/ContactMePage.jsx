import Contact from "../components/Contact";
import CustomTitle from "../components/CustomTitle";

const ContactMePage = () => {
  CustomTitle("AD Designs | Contact");

  return (
    <section>
      <h1 className="font-bold text-2xl mb-7">Contact Me</h1>
      <Contact />
    </section>
  );
};

export default ContactMePage;
