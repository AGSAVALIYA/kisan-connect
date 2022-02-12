import React, {useState} from 'react';
import '../Styles/signin.css';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import '../Styles/register.css';
import {getFirestore, collection, addDoc} from 'firebase/firestore';


function Register({setEmail, setPassword, handleSubmit}) {
    const [name, setName] = useState('');
    const [email, setEmailState] = useState('');
    const [password, setPasswordState] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    let navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
    
        if(authToken){
          navigate('/');
        }

    }, [])


    const db = getFirestore();
    
    const createNewUser = async () => {
        const docRef = await addDoc(collection(db, "user"), {
            name: name,
            email: email,
            password: password,
            address: address,
            phone: phone,
            age: age,
            gender: gender
        });
        

        console.log(docRef.id)

        handleSubmit();
    }

    return (
        <div className='register-main'>
            <div className="profile-pic">    
            <label for="img">Click me to upload image</label>
            <input type="file" id='img' className="circle" />
        </div>

        <div className="inputs">
            <table className="table">
                <tr>
                    <td>
                        <input type="text" name="name" placeholder="Name*" className="name" required  onChange={(e) => setName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="email" name="email" placeholder="Email*" className="email" onChange={(e) => setEmail(e.target.value)} required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" name="password" placeholder="Password*" className="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="address" placeholder="Address*" className="address"required onChange={(e) => setAddress(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" name="phone" placeholder="Phone*" className="phone" required onChange={(e) => setPhone(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" name="age" placeholder="Age*" className="age" required onChange={(e) => setAge(e.target.value)}/>
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

                            <button className="submit-btn" onClick={createNewUser}>Register</button>
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