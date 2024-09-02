import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
    /*
    code below: to transition something translateX
    .moved {
                transform: translateX(42px);
                transition: 0.3s ease-in-out;
                -webkit-transition: 0.3s ease-in-out;
                }
    */
   function handleClick() {
    console.log('hello world')
    var moveCircle = document.getElementById('light-dark-mode-icon');
    //moveCircle.setAttribute('class', 'nightTime');

    if (moveCircle.className=='dayTime') {
        moveCircle.setAttribute('class','nighTime');
    } else {
        moveCircle.setAttribute('class', 'dayTime');
    }
   }
   var iconSize = '1x';

    return (
        <>
            <div className="nav-container">
            <nav>
                <div className="brand"><strong>Adrian's Website</strong></div>
                <ul className='navbar-nav-left'>
                    <li><NavLink 
                            className={({isActive}) => 
                                {
                                    return isActive ? 'activeLink' : ''; 
                                }} 
                            to="/">Home
                        </NavLink>
                    </li>
                    <li><NavLink 
                            className={({isActive}) => 
                            {
                                return isActive ? 'activeLink' : ''; 
                            }} 
                        to="/resume">Resume</NavLink>
                    </li>
                    <li><NavLink 
                            className={({isActive}) => 
                            {
                                return isActive ? 'activeLink' : ''; 
                            }} 
                        to="/projects">Projects</NavLink>
                    </li>
                    <li>Contact Me</li>
                </ul>
                <ul className='navbar-nav-right'>
                    <li><FontAwesomeIcon icon={faBars} size={iconSize} /></li>
                    <li id='light-dark-mode-icon' className='dayTime'><FontAwesomeIcon onClick={handleClick} icon={faCircle} size={iconSize}  /></li>
                </ul>
            </nav>
            </div>
        </>
    );
  }