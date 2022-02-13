import react, {useState} from 'react';
import 'tachyons';
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {Link} from 'react-router-dom';
import '../Styles/signin.css';

const Signin = ({handleSubmit}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  let navigate = useNavigate()

  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token');
  
      if(authToken){
        navigate('/')
      }

  }, [])
  
    return(
      <div className='signin-container'>
          <div className='signin-main mv5'>
      <div className=''>
          <img src="https://i.ibb.co/z4Kw4sH/login.png" alt="Farmer" width="400"/>
      </div>
      <div className=' tc'> 
          <article className="br3 box ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 tc  center">
              <main className="pa4 black v-mid">
                  <div className="measure">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                      <div className="mt3">
                          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                          <input
                              className="pa2 input-reset ba b--near-black bg-transparent hover-black w-100"
                              type="email"
                              name="email-address"
                              id="email-address"
                              onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>
                      <div className="mv3">
                          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                          <input
                              className="b pa2 input-reset ba b--near-black bg-transparent hover-black w-100"
                              type="password"
                              name="password"
                              id="password"
                              onChange={(e) => setPassword(e.target.value)}
                          />
                      </div>
                      </fieldset>
                      <div className="">
                      <button
                          className="b ph3 pv2 input-reset ba b--near-black black bg-transparent grow pointer f6 dib"
                          onClick={() => handleSubmit(1, email, password)}
                      >Sign In</button>
                      </div>
                  </div>
                  <div className="lh-copy mt3">
                       <p className="f8 link dim db black pointer"><Link className="reglink" to="/register">Register</Link></p>
                  </div>
              </main>
          </article>
      </div>  
      <div className='signinbg'>&nbsp;</div>
     </div>
      </div>
    );
}

export default Signin;

