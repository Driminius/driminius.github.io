import { Link } from "react-router";
import HeadingTwoCopy from "../components/HeadingTwoCopy";
import CustomTitle from "../components/CustomTitle";
const ResumePage = () => {
  CustomTitle("AD Designs | Resume");

  return (
    <section>
      <h1 className="font-bold text-2xl mb-7">Resume</h1>
      <em>
        Available upon{" "}
        <Link
          className="text-blue-500 font-bold transition hover:text-blue-800"
          to="/contact-me"
        >
          request
        </Link>
      </em>
      <HeadingTwoCopy
        head="CMS Experience"
        copy="Below are CMS Ive worked with"
      />
      <ul>
        <li>Wordpress</li>
        <li>Drupal</li>
        <li>Cascade</li>
      </ul>

      <p className="mt-[20px]">
        <em>
          To learn more of my experience working at higher education and
          nonprofits, let's schedule a call!
        </em>
      </p>
    </section>
  );
};
export default ResumePage;
