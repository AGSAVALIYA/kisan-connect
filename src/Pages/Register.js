import React from 'react'
import '../Styles/signin.css'

function Register({setEmail, setPassword, handleSubmit}) {
  return (
    <div className='signin-main mv5'>
        <div className=''>
            <img src="https://i.ibb.co/z4Kw4sH/login.png" alt="Farmer" width="400"/>
        </div>
        <div className=' tc'> 
            <article className="br3 box ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 tc  center">
                <main className="pa4 black v-mid">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
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
                            onClick={handleSubmit}
                        >Register</button>
                        </div>
                    </div>
                </main>
            </article>
        </div>  
        <div className='signinbg'>&nbsp;</div>
    </div>
  )
}

export default Register