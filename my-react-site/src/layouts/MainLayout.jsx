import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

/* MainLayout should always contain NavBar and Footer and sidebar? */
const MainLayout = () => {
    return (
        <>
            <NavBar />
            <div
                className='grid grid-cols-1 md:grid-cols-[15%_85%] w-full gap-6'
            >
                <div>
             <SideBar />
             </div>
             <div>
            <main>
            <Outlet />
            </main>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;