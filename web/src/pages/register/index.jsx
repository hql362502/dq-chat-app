import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RegisterWrapper } from './style' 
import Logo from '../../assets/logo.svg'
import { registerRoute } from '../../utils/APIRoutes';
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
export default function Register() {
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
            const {username, email, password} = values
            const {data} = await axios.post(registerRoute, {
                username, 
                email,
                password
            })
            if(data.status === false){
                toast.error(data.msg, toastOptions)
            }
            if(data.status === true){
                localStorage.setItem("dq-chat-user", JSON.stringify(data.user))
                navigate("/setavatar")
            }
        }
    }

    const handleChange = (event)=>{
        event.preventDefault()
        setValues({...values, [event.target.name]: event.target.value})
    }
    const handleValidate = ()=>{
        const {username, email, password, confirmPassword} = values
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        if(password !== confirmPassword){
            toast.error("密码不一致", toastOptions)
            return false
        }else if(username.length < 3){
            toast.error("用户名应大于三个字符", toastOptions)
            return false
        }else if(password.length < 8){
            toast.error("密码应大于八个字符", toastOptions)
            return false
        }else if(email === ""){
            toast.error("邮箱不能为空", toastOptions)
            return false
        }else if(!regEmail.test(email)){
            toast.error("请输入合法的邮箱", toastOptions)
            return false
        }
        return true
        
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
        <RegisterWrapper>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h1>dq-chat</h1>
                </div>
                <input type="text" placeholder="用户名" name="username" onChange={(event)=>handleChange(event)}/>
                <input type="email" placeholder="邮箱" name="email" onChange={(event)=>handleChange(event)}/>
                <input type="password" placeholder="密码" name="password" onChange={(event)=>handleChange(event)}/>
                <input type="password" placeholder="确认密码" name="confirmPassword" onChange={(event)=>handleChange(event)}/>
                <button type="submit">注册</button>
                <span><em>已经存在一个账号 ? </em><Link to="/login">去登录</Link></span>
            </form>
            <ToastContainer/>
        </RegisterWrapper>
    )
}
