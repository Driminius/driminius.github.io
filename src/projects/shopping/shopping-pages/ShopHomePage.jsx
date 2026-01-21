import ColorBanner from "../shopping-components/ColorBanner";
import Promos from "../shopping-components/Promos";
import Slider from "../shopping-components/Slider";
import clothesData from '../../../../clothes.json'

const ShopHomePage = () => {
    return (
        <>
        hello from shopping homepage
            <ColorBanner />
            <ColorBanner catchline={'Apply Today for a Discount!'} color={'lightblue'}  />
            <ColorBanner catchline={'Apply Today for a Discount!'} color={'orange'} fontCol={'black'} />
            <Promos />
            <Slider list={clothesData}/>
        </>
    )
}

export default ShopHomePage;