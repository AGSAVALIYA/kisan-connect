import React, { useState } from 'react';
import '../Styles/signin.css';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../Styles/register.css';
import 'tachyons';

function Register({ handleSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmailState] = useState('');
    const [password, setPasswordState] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');

    let navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if (authToken) {
            navigate('/');
        }

    }, [])

    return (
        <div className='register-main tc'>
            {/*<div className="profile-pic grow">
                <label htmlFor="img">Click me to upload image</label>
                <input type="file" id='img' className="circle" />
        </div>*/}
            <div className='register-container flex flex-row tc mv5 ml6'>
            <div><img class="farmer-img" src="https://i.ibb.co/z4Kw4sH/login.png" alt="Farmer" width="400"/></div>
            <div className="inputs tc dib pa4 reg-table tc br3">
                 <table className="table tc">
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" name="name" placeholder="Name*" className="name" required onChange={(e) => setName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email" name="email" placeholder="Email*" className="email" required onChange={(e) => { setEmailState(e.target.value) }} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name="password" placeholder="Password*" className="password" required onChange={(e) => { setPasswordState(e.target.value) }} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" name="address" placeholder="Address*" className="address" required onChange={(e) => setAddress(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="number" name="phone" placeholder="Phone*" className="phone" required onChange={(e) => setPhone(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="number" name="age" placeholder="Age*" className="age" required onChange={(e) => setAge(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="gender" required onChange={(e) => setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Prefer not to say</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="submit">

                                    <button className="submit-btn" onClick={() => handleSubmit(2, email, password, name, address, phone, age, gender)}>Register</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            
                                <Link className="login-btn grow" to="/signin">Already have an account? Login</Link>
                            
                            </td>
                        </tr>
                    </tbody>

                </table>
                
                
            </div>
            </div>
            <div className='register-bg'>&nbsp;</div>
        </div>
    )
}

export default Register;