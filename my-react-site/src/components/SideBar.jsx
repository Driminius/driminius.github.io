import { Link } from "react-router";
const SideBar = () => {
    return (
        <div>
             <aside className=''>
                    <ul>
                        <li>
                        <Link to='/'>
                        Home
                        </Link>
                        </li>
                        <li>
                      <Link to='/portfolio'>Portfolio</Link>
                      </li>
                      <li>Resume</li>
                      <li>Watches</li>
                      <li>Belts</li>
                      <li></li>
                    </ul>
            </aside>  
        </div>
    )
}

export default SideBar;