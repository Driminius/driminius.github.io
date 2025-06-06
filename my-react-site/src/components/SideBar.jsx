import { Link } from "react-router";
import {FaHouse,FaFolder, FaUser } from "react-icons/fa6"
const SideBar = () => {
    return (
        <div>
             <aside className=''>
                    <ul className='grid justify-center'>
                        <li className='p-3'>
                        <Link to='/'>
                            <FaHouse size={30} />
                        </Link>
                        </li>
                        <li className='p-3'>
                      <Link to='/portfolio'><FaFolder size={30}/></Link>
                      </li>
                      <li className='p-3'>Resume</li>
                      <li className='p-3'><Link to='/contact-me'><FaUser size={30}/></Link></li>
                      <li></li>
                    </ul>
            </aside>  
        </div>
    )
}

export default SideBar;