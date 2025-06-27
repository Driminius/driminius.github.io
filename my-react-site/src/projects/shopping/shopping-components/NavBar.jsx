import { Link } from "react-router";
import logo from '../../../assets/react.svg'
const NavBar = () => {
    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                <div
                    className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                    <img
                        className="h-10 w-auto"
                        alt="Clothing Store"
                        src={logo}
                    />
                    <span className="hidden md:block text-white text-2xl font-bold ml-2"
                        ><h1>Clothing Store</h1></span>
                    </Link>
                    <div className="md:ml-auto">
                    <div className="flex space-x-2">
                        <a
                        to="/"
                       // className={  }
                        >Home</a>
                        <a
                        to="/jobs"
                        //className={ linkClass }
                        >Jobs</a>
                        <a
                        to="/add-job"
                        //className={ linkClass }
                        >Add Job</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;