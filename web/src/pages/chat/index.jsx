import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Contacts from '../../components/contacts'
import axios from 'axios'
import { allUsersRoute } from '../../utils/APIRoutes'
import { ChatWrapper } from './style'
export default function Chat() {
  const navigate = useNavigate()
  const [allContacts, setAllContacts] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const getAllUsers = async()=>{
    const user = JSON.parse(localStorage.getItem("dq-chat-user"))
    const {data} = await axios.get(`${allUsersRoute}/${user._id}`)
    setAllContacts([...data])
    setCurrentUser({...user})
  }
  useEffect(()=>{
    if(!localStorage.getItem("dq-chat-user")){
        navigate("/login")
    }
    else{
      getAllUsers()
    }
  },[])
  return (
    <ChatWrapper>
      <div className="container">
        <div>{
                allContacts.map((item)=>{
                    const props = {
                        image: item.avatarImage,
                        id: item._id,
                        username: item.username
                    }
                    return (
                        <Contacts {...props}/>
                    )
                })
            }
            </div><div>
        </div>
      </div>
    </ChatWrapper>
  )
}
