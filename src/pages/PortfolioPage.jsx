import { Link } from "react-router";
import logo from "../assets/SoaringSlothSunset-crop2.png";
import cryptoImg from "../assets/crypto-dash.png";
import ideadropImg from "../assets/idea-drop-cover.png";
import CustomTitle from "../components/CustomTitle";

const PortfolioPage = () => {
  CustomTitle("AD Designs | Portfolio");

  return (
    <section>
      <h1 className="font-bold text-2xl mb-7">Portfolio</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
        <Link to="/projects/shop/home">
          <div className="card">
            <img
              style={{ height: "300px" }}
              src={"../images/woman-shorts.webp"}
              alt="a blonde woman with blue sky in the background"
            />
            <div className="card-info">
              <h2 className="mt-2 mb-2 text-2xl font-bold tracking-wide">
                <span className="pb-1 border-b-8 border-[#E1E1E1]">
                  Clothing Store Demo
                </span>
              </h2>
              <p className="pt-4 pb-2">
                A Single Page Application of a clothing store using TailwindCSS,
                react and dummy json data to demonstrate a clothing app.
              </p>
              <h3 className="font-bold ">Technology Stack</h3>
              <p>
                Languages: JavaScript, ES6, JSX
                <br />
                Framework: ReactJS, TailwindCSS
                <br />
                Backend: dummy JSON data to emulate extracting data from array
                of objects
              </p>
            </div>
          </div>
        </Link>
        <Link to="/portfolio/calendar">
          <div className="card">
            <img
              style={{ height: "300px" }}
              src={logo}
              alt="artwork of cartoon sloth with orange background"
            />
            <div className="card-info">
              <h2 className="mt-2 mb-2 text-2xl font-bold tracking-wide">
                <span className="pb-1 border-b-8 border-[#E1E1E1]">
                  Calendar Filter
                </span>
              </h2>
              <p className="pt-4 pb-2">
                A single page app written in javascript that filters a calendar
                for a given year. For example, the calendar can return the dates
                for the 3rd Sunday for a given year. I wrote this for an event
                coordinator that needed to know certain iterations of a day for
                a calendar year.
              </p>
              <h3 className="font-bold ">Technology Stack</h3>
              <p>
                Languages: JavaScript, HTML5, CSS3
                <br />
                Framework: TailwindCSS, ReactJs <br />
              </p>
            </div>
          </div>
        </Link>
        <a href="https://crypto-dash-neon-six.vercel.app" target="_blank">
          <div className="card">
            <img
              style={{ height: "300px" }}
              src={cryptoImg}
              alt="crypto coin dashboard showing 'bitcoin' and 'ethereum' "
            />
            <div className="card-info">
              <h2 className="mt-2 mb-2 text-2xl font-bold tracking-wide">
                <span className="pb-1 border-b-8 border-[#E1E1E1]">
                  Crypto Dash
                </span>
              </h2>
              <p className="pt-4 pb-2">
                A single page React App that allows users to check the pricing
                of crypto coin, the highs and lows, the 24h change, and a chart
                that depicts the value of the coin from the past 7 days.
              </p>
              <h3 className="font-bold ">Technology Stack</h3>
              <p>
                Languages: JavaScript, ES6, JSX
                <br />
                Framework: ReactJS, TailwindCSS <br />
              </p>
            </div>
          </div>
        </a>
        <a href="https://idea-drop-ui-bay-nine.vercel.app" target="_blank">
          <div className="card">
            <img
              style={{ height: "300px" }}
              src={ideadropImg}
              alt="Welcome to Idea Drop application"
              className="border-b-2 border-blue-900"
            />
            <div className="card-info">
              <h2 className="mt-2 mb-2 text-2xl font-bold tracking-wide">
                <span className="pb-1 border-b-8 border-[#E1E1E1]">
                  Idea Drop
                </span>
              </h2>
              <p className="pt-4 pb-2">
                A full-stack React App that allows users to register and post
                ideas.
              </p>
              <h3 className="font-bold ">Technology Stack</h3>
              <p>
                Languages: TypeScript
                <br />
                Framework: ReactJS, TailwindCSS <br />
              </p>
            </div>
          </div>
        </a>
      </div>
      <p className="mt-[20px]">
        <em>
          To learn more of my experience working at higher education and
          nonprofits, let's schedule a call!
        </em>
      </p>
    </section>
  );
};
export default PortfolioPage;
