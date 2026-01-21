import { Link } from "react-router";
import logo from '/images/logo.png'
const Footer = () => {
    return (
        <footer className=''>
                <nav className="bg-[#323232] border-b border-[#323232]-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex text-white h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                        <img
                            className="h-10 w-auto"
                            src={logo}
                            alt="Clothing Store"
                        />
                        <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            ><p>AD Designs</p></span>
                            <p>&copy; 2025 My Website</p>
                        </Link>
                       
                      
                    </div>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;