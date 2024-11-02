import React from 'react';
import "./login.css"
import { useState } from 'react';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {
    
    const [email, setEmail]=useState()
    const [password, setPaword]=useState()
    const navigate = useNavigate()

    const handelSubmit=(e)=>{
        e.preventDefault(e)
        axios.post('http://127.0.0.1:3001/login', {email,password})
        .then(result =>{console.log(result) 
            if (result.data === "Success") {
                navigate('/home')
            }
        } )
        .catch(err=> console.log(err))
    }
    return (
        <div className="back">


            <div className="div-center">


                <div className="content">


                        <h3>Login</h3>
                        <hr />
                        <form onSubmit={handelSubmit}>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPaword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <hr />
                            <Link to="/register" type="button" className="btn btn-success">Signup</Link>
                            <button type="button" className="btn btn-link">Reset Password</button>

                        </form>

                </div>


                
        </div>
   </div>
    );
}

export default Login;
