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
        head="Technologies"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid 
                obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero 
                error ratione mollitia quos officia. Animi, a! lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid 
                obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero 
                error ratione mollitia quos officia. Animi, a! lore
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid 
                obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero 
                error ratione mollitia quos officia. Animi, a! lore
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid 
                obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero 
                error ratione mollitia quos officia. Animi, a! loreLorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum aliquid 
                obcaecati quam id similique velit optio ipsam, quasi laborum ipsum earum libero 
                error ratione mollitia quos officia. Animi, a! lore"
      />

      <HeadingTwoCopy
        head="Let's Work Together!"
        copy="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi id ratione sit 
                laudantium suscipit atque sapiente at, aspernatur distinctio voluptatum corporis asperiores 
                harum dolorem aperiam nam non doloremque officiis cumque. Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Ea illum aliquid obcaecati quam id similique velit optio 
                ipsam, quasi laborum ipsum earum libero error ratione mollitia quos officia. Animi, a!"
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
