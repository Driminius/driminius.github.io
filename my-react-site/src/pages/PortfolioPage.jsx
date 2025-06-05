import { Link } from "react-router";
const PortfolioPage = () => {
    return(
        <section>
            <h2>Portfolio</h2>
            <div className='grid grid-cols-3'>
                <Link to='/projects/shop'>
                <div className='card'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tenetur natus, vitae enim, possimus eligendi in accusamus laboriosam dolorum facilis consequuntur accusantium doloremque expedita quo ducimus pariatur at quasi quisquam.</p>
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