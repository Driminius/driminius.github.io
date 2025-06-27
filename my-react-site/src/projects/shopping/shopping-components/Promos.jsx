import { Link } from "react-router";

const Promos = () => {
    
    return (
        <section
            className='grid grid-cols-1 md:grid-cols-2'
        >
            <div 
                className="bg-[url('/images/male-shorts.webp')]  h-200 bg-cover "
                role='img'
                aria-label="denim shorts for men"
            >
                <Link 
                    to="/category/men" >
                    <div>
                <h2
                    className=' text-white text-3xl tracking-wide mt-20 ml-15 mb-2 font-extrabold '
                >MEN'S SHORTS</h2>
                    <p
                        className='ml-15 mb-10 text-white underline'
                        >
                        Shop Now</p>
                </div>
                </Link>
            </div>
            <div 
                className="bg-[url('/images/woman-shorts.webp')] h-200 bg-cover" 
                role='img'
                aria-label="denim shorts for women"
            >
                <Link 
                    to='/category/women'>
                    <div>
                <h2
                    className=' text-white text-3xl tracking-wide mt-20 ml-15 mb-2 font-extrabold '
                >WOMEN'S SHORTS</h2>
                    <p
                        className='ml-15 mb-10 text-white underline'
                        >
                        Shop Now</p>
                </div>
                </Link>
            </div>

        </section>
    )
}

export default Promos;