import HeadingTwoCopy from "../components/HeadingTwoCopy";
import CustomTitle from "../components/CustomTitle";

const HomePage = () => {
  CustomTitle("AD Designs | Home");
  return (
    <section className="lg:pr-90">
      <h1 className="font-bold text-2xl mb-7">
        Hiya, I'm Adrian Do, a web developer/designer
      </h1>

      <HeadingTwoCopy
        head="Let's Work Together!"
        copy="Bringing together art and technology. Let's build genuine apps/websites together. I'm very 
        transparent and calculated with design and open to feedback. I provide research and evidence to backup any 
        design or strategies. Transparency and communication is key."
      />

      <HeadingTwoCopy
        head="About Me"
        copy="Attaining a BS in Computer Science at Cal State East Bay, helped shape my career in technology and creativity. 
        I'm adaptable and capable of learning new programming languages, using problem solving methodology and applying 
        design principles to my work. After finding solutions, I enjoy code refactoring and figuring ways to redesign to 
        enrich helpful User Experiences and designing cleaner, simple interfaces. Working at several colleges and 
        nonprofits, I learned to create accessible web pages and apply those standards, when designing web pages."
      />
    </section>
  );
};

export default HomePage;
