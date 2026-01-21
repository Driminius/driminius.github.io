import { Outlet } from "react-router";
import clothesData from '../../../../clothes.json'
import NavBar from "../shopping-components/NavBar";
import Footer from "../shopping-components/Footer";

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