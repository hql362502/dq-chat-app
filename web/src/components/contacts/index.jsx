import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { allUsersRoute } from '../../utils/APIRoutes'
import { ContactsWrapper } from './style'
export default function Contacts(props) {

    const [allUsers, setAllUsers] = useState([])
    
    const getAllUsers = async()=>{
        const user = JSON.parse(localStorage.getItem("dq-chat-user"))
        const {data} = await axios.get(`${allUsersRoute}/${user._id}`)
        setAllUsers([...data])
    }
    useEffect(()=>{
        getAllUsers()
    },[])
    const {image, username, id} = props
    return (
        <ContactsWrapper key={id}>
            <img src={`data:image/svg+xml;base64,${image}`}/><span>{username}</span>
        </ContactsWrapper>
    )
}
