import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginWrapper } from './style' 
import Logo from '../../assets/logo.svg'
import { loginRoute } from '../../utils/APIRoutes';
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
export default function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        theme: "dark",
        draggle: true
    }
    const handleSubmit = async(event)=>{
        event.preventDefault()
        if(handleValidate()){
            const {username, password} = values
            const {data} = await axios.post(loginRoute, {
                username, 
                password
            })
            if(data.status === false){
                toast.error(data.msg, toastOptions)
            }
            if(data.status === true){
                localStorage.setItem("dq-chat-user", JSON.stringify(data.user))
                navigate("/")
            }
        }
    }

    const handleChange = (event)=>{
        event.preventDefault()
        setValues({...values, [event.target.name]: event.target.value})
    }
    const handleValidate = ()=>{
        const {username, password} = values
        
        if(username === ""){
            toast.error("用户名不能为空", toastOptions)
            return false
        }else if(password === ""){
            toast.error("密码不能为空", toastOptions)
            return false
        }
        return true
    }
    const localStorageValidate = async(username, password)=>{
        const {data} = await axios.post(loginRoute, {
            username, 
        })
        console.log(data)
        if(data.status === true){
            localStorage.setItem("dq-chat-user", JSON.stringify(data.user))
            navigate("/")
        }
    }
    useEffect(()=>{
        if(localStorage.getItem("dq-chat-user")){
            // const user = localStorage.getItem("dq-chat-user")
            // const {username, password} = JSON.parse(user)
            // localStorageValidate(username, password)
            navigate("/")
        }
    },[])
    return (
        <LoginWrapper>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h1>dq-chat</h1>
                </div>
                <input type="text" placeholder="用户名" name="username" onChange={(event)=>handleChange(event)} min="3"/>
                <input type="password" placeholder="密码" name="password" onChange={(event)=>handleChange(event)}/>
                <button type="submit">登录</button>
                <span><em>暂时还没有账号 ? </em><Link to="/register">去注册</Link></span>
            </form>
            <ToastContainer/>
        </LoginWrapper>
    )
}
