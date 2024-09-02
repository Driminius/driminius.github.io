import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function SideBarRight() {
  var iconSize = '2x';
    return (

      <section>
         <ul className='side-bar-right'>
    

        <li><a href='#'><FontAwesomeIcon icon={faEnvelope} size={iconSize}/></a></li>
        <li><a href='#'><FontAwesomeIcon icon={faFacebook} size={iconSize}/></a></li>
        <li><a href='#'><FontAwesomeIcon icon={faUser} size={iconSize}/></a></li>
   
        </ul>
      </section>
    );
  }