import { Outlet } from "react-router";
import clothesData from '../../clothes.json'
import NavBar from "../projects/shopping/shopping-components/NavBar";
import Footer from "../projects/shopping/shopping-components/Footer";

console.log(clothesData);

const ShopLayout = () => {
    return (
        <>
        <NavBar />
        Hello from shopping store layout
        
        <Outlet />
        <Footer />
        </>
    )
}

export default ShopLayout;