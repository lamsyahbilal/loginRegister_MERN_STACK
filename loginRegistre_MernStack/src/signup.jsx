import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [password, setPaword]=useState()
    const navigate = useNavigate()

    const handelSubmit=(e)=>{
        e.preventDefault = (e)
        axios.post('http://127.0.0.1:3001/register', {name,email,password})
        .then(result =>{console.log(result) 
        navigate('/login')} )
        .catch(err=> console.log(err))
    }
    return (
        <div className='back'>
            <div className='div-center '>
                            <form className="form-horizontal content" onSubmit={handelSubmit}>
                    <fieldset >
                        <div id="legend">
                        <legend className="">Register</legend>
                        </div>
                        <div className="control-group">
                    
                        <label className="control-label"  for="username">Username</label>
                        <div className="controls">
                            <input type="text" id="username" name="username" placeholder=""
                             className="form-control" 
                             onChange={(e)=>setName(e.target.value)}/>
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                        </div>
                    
                        <div className="control-group">
                        
                        <label className="control-label" for="email">E-mail</label>
                        <div className="controls">
                            <input type="text" id="email"
                             name="email" placeholder=""
                              className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                        </div>
                    
                        <div className="control-group">
                    
                        <label className="control-label" for="password">Password</label>
                        <div className="controls">
                            <input type="password" id="password"
                             name="password" placeholder=""
                              className="form-control" onChange={(e)=>setPaword(e.target.value)}/>
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                        </div>
                    
                        {/* <div className="control-group">
                        <label className="control-label"  for="password_confirm">Password (Confirm)</label>
                        <div className="controls">
                            <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge"/>
                            <p className="help-block">Please confirm password</p>
                        </div>
                        </div> */}
                    
                        <div className="control-group">
                        {/* <!-- Button --> */}
                        <div className="controls">
                            <button className="btn btn-success">Register</button>
                        </div>
                        </div>

                        {/* login if hav alredy an account */}

                    </fieldset>
            </form>

                        <div className="control-group">
                                {/* <!-- Button --> */}
                                <div className="controls">
                                    <p className="help-block">Loge in if you have alredy a account</p>
                                    <Link to="/login" className="btn btn-success">Login </Link>
                                </div>
                        </div>
            </div>

        </div>
    );
}

export default Signup;
