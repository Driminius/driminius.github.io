import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

/* MainLayout should always contain NavBar and Footer and sidebar? */
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className=" min-h-[300px] p-[2rem] grid grid-cols-1 md:overflow-visible md:grid-cols-[15%_85%] ">
        <div className=" block md:sticky md:h-[100px] md:top-30 ">
          <SideBar />
        </div>
        <div className="pl-2 pr-2 ">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
