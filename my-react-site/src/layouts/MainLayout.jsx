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
                        
                className=' m-auto  max-w-7xl p-[2rem] grid grid-cols-1 lg:grid-cols-[15%_85%] '
            >
                <div className=''>
                    <SideBar />
                </div>
                <div className=''>
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