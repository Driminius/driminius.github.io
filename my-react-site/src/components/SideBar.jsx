import { Link } from "react-router";
import {FaHouse,FaFolder } from "react-icons/fa6"
const SideBar = () => {
    return (
        <div>
             <aside className='text-center'>
                    <ul>
                        <li>
                        <Link to='/'>
                        <FaHouse />
                        </Link>
                        </li>
                        <li>
                      <Link to='/portfolio'><FaFolder /></Link>
                      </li>
                      <li>Resume</li>
                      <li>Contact</li>
                      <li>Belts</li>
                      <li></li>
                    </ul>
            </aside>  
        </div>
    )
}

export default SideBar;