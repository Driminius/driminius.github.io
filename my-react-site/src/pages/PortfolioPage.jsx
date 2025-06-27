import { Link } from "react-router";
const PortfolioPage = () => {
    return(
        <section>
            <h1>Portfolio</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6'>
                <Link to='/projects/shop/home'>
                <div className='card'>
                    <img 
                        src='/images/vite.svg'
                    />
                    <h2>Clothing Store Demo</h2>
                    <p>A Single Page Application of a clothing store using TailwindCSS, react and dummy json data to demonstrate a clothing app.</p>
                </div>
                </Link>
                <div className='card'>
                    <h2>Calendar Filter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tenetur natus, vitae enim, possimus eligendi in accusamus laboriosam dolorum facilis consequuntur accusantium doloremque expedita quo ducimus pariatur at quasi quisquam.</p>
                </div>
                <div className='card'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tenetur natus, vitae enim, possimus eligendi in accusamus laboriosam dolorum facilis consequuntur accusantium doloremque expedita quo ducimus pariatur at quasi quisquam.</p>
                </div>

            </div>
        </section>
    )
}
export default PortfolioPage;