import { Outlet } from "react-router";
import clothesData from '../../clothes.json'

console.log(clothesData);

const ShopLayout = () => {
    return (
        <>
        Hello from shopping store layout
        
        <Outlet />
        </>
    )
}

export default ShopLayout;