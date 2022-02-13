import react, {useState} from 'react';
import '../Styles/navbar.css';
import {Link} from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import {useNavigate} from 'react-router-dom'

const Navbar = () =>{

    const [hidden, setHidden] = useState(true);

    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/signin');
    }

   const onClickHamburger = () => {
        setHidden(!hidden);
   }

    return(
        <nav>
            <div>
                <Link className="brand-name" to = '/'>Kisan Connect</Link>
                <button href="#" className="hamburger" onClick={onClickHamburger}>
                    <FeatherIcon className='menu' icon="menu" color="#FFF" size={36}/> 
                </button>
            </div>
            <div className={`navLinks ${hidden ? 'hide' : ''}`}>
                <Link className = 'link' to = '/'>Home</Link>
                <Link className = 'link' to = '/dashboard'>Dashboard</Link>
                <button className= 'link logoutButton' onClick={handleLogout}>Logout</button>
            </div>
		</nav>
    )
}

export default Navbar;