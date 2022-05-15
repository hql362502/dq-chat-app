import React from 'react'
import { Link } from 'react-router-dom';
import { RegisterWrapper } from './style' 
export default function Register() {
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("form")
    }
    const handleChange = (event)=>{
        event.preventDefault()
        alert("change")
    }
    return (
        <RegisterWrapper>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="brand">
                    <img src="" alt="" />
                    <h1>snappy</h1>
                    <input type="text" placeholder="Username" name="username" onChange={(event)=>handleChange(event)}/>
                    <input type="email" placeholder="Email" name="email" onChange={(event)=>handleChange(event)}/>
                    <input type="password" placeholder="Password" name="password" onChange={(event)=>handleChange(event)}/>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(event)=>handleChange(event)}/>
                    <button type="submit">Submit</button>
                    <span>Already have an account ? <Link to="/login">Login</Link></span>
                </div>

            </form>
        </RegisterWrapper>
    )
}
