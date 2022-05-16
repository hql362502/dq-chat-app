import React,{useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import Loader from "../../assets/loader.gif"
import {SetAvatarWrapper} from "./style"
import classnames from "classnames"
import {setAvatarRoute } from "../../utils/APIRoutes"
import { Buffer } from "buffer"
export default function SetAvatar() {
    const api = "https://api.multiavatar.com/45678945"

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        theme: "dark",
        draggle: true
    }
    const navigate = useNavigate()
    const [avatars, setAvatars] = useState([])
    const [selectedAvatar, setSelectedAvatar] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    const getAvatars = async()=>{
        const data = []
        for(let i = 0;i< 4;i++){
            const image = await axios.get(`${api}/${Math.round(Math.random()*1000)}`)
            const buffer = new Buffer(image.data)
            data.push(buffer.toString("base64"))
        }
        setAvatars([...data])
        setIsLoading(false)
    }
    const setProfilePicture = async()=>{
        if(selectedAvatar === undefined){
            toast.error("Please select an avatar", toastOptions)
            return false
        }else{
            const user = await JSON.parse(localStorage.getItem("dq-chat-user"))
            console.log(user)
            const {data} = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar]
            })
            console.log(data)
            if(data.status === true){
                user.isAvatarImageSet = true
                user.avatarImage = data.image
                localStorage.setItem("dq-chat-user", JSON.stringify(user))
                navigate("/")
            }else{
                toast.error("设置头像出现错误，请重新尝试", toastOptions)
            }
        }
    }
    
    useEffect(()=>{
        getAvatars()
        
    },[])
    return (
        <>
            <SetAvatarWrapper>
                {isLoading ? <div><img src={Loader}/></div> : <><div className="title-container">
                    <h1>选择一个头像作为你的头像图片</h1>
                </div>
                <div className="avatar-container">
                {
                    (avatars.map((avatar, index)=> {
                        return (
                            <div key={index} onClick={()=>setSelectedAvatar(index)} className={classnames("avatar",{"selected": selectedAvatar === index})}>
                                <img src={`data:image/svg+xml;base64,${avatar}`} alt=""/>
                            </div>
                        )
                    }))
                }
                </div>
                <button onClick={setProfilePicture}>选择该图片作为个人头像</button></>}
            </SetAvatarWrapper>
            <ToastContainer/>
        </>
    )
}
