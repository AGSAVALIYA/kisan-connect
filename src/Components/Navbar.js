import react from 'react';
import '../Styles/navbar.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Navbar = () =>{

    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/signin');
    }

    return(
        <nav>
            <div>
                <div className="brand-name">Kisan Connect</div>
                <a href="#" className="hamburger">
                </a>
            </div>
            <div className="navLinks hide">
                <Link className = 'link' to = '/'>Home</Link>
                <Link className = 'link' to = '/dashboard'>Dashboard</Link>
                <button className= 'link logoutButton' onClick={handleLogout}>Logout</button>
            </div>
		</nav>
    )
}

export default Navbar;