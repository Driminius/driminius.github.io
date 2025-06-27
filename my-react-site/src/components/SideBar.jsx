import { Link } from "react-router";
import {FaHouse,FaFolder, FaUser } from "react-icons/fa6"
const SideBar = () => {
    return (
        <div>
             <aside className=''>
                    <ul className='grid justify-center'>
                        <li className='p-3'>
                        <Link to='/'>
                            Home
                        </Link>
                        </li>
                        <li className='p-3'>
                      <Link to='/portfolio'>
                            Portfolio
                      </Link>
                      
                      </li>
                      <li className='p-3'>Resume</li>
                      <li className='p-3'><Link to='/contact-me'>
                            Contact Me
                      </Link></li>
                    </ul>
            </aside>  
        </div>
    )
}

export default SideBar;