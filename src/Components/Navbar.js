import react from 'react';
import '../Styles/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <div>
                <div class="brand-name">Kisan Connect</div>
                <a href="#" class="hamburger">
                </a>
            </div>
            <div class="navLinks hide">
                <Link to = '/'>Home</Link>
                <Link to = '/dashboard'>Dashboard</Link>
                <Link to = '/signin'>Sign In</Link>
                <Link to = '/register'>Register</Link>
            </div>
		</nav>
    )
}

export default Navbar;