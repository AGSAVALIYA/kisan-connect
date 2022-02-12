import React from 'react'
import '../Styles/signin.css'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

function Register({setEmail, setPassword, handleSubmit}) {

    let navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
    
        if(authToken){
          navigate('/');
        }

    }, [])

    return (
        <div className='signin-main mv5'>
            <div className="profile-pic">
            <input type="file" className="circle">

        </input>
        </div>

        <div className="inputs">
            <table className="table">
                <tr>
                    <td>
                        <input type="text" name="name" placeholder="Name*" className="name" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="email" name="email" placeholder="Email*" className="email" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" name="password" placeholder="Password*" className="password" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="address" placeholder="Address*" className="address"required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" name="phone" placeholder="Phone*" className="phone" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" name="age" placeholder="Age*" className="age" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="gender" required>  
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Prefer not to say</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="submit">

                            <button className="submit-btn">Register</button>
                        </div>
                    </td>   
                </tr>
            </table>
        </div>
            <div className='signinbg'>&nbsp;</div>
        </div>
    )
}

export default Register