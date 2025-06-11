import { Link } from "react-router";
const PortfolioPage = () => {
    return(
        <section>
            <h2>Portfolio</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6'>
                <Link to='/projects/shop/home'>
                <div className='card'>
                    <img 
                        src='/images/vite.svg'
                    />
                    <h3>Clothing Store Demo</h3>
                    <p>A Single Page Application of a clothing store using TailwindCSS, react and dummy json data to demonstrate a clothing app.</p>
                </div>
                </Link>
                <div className='card'>
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