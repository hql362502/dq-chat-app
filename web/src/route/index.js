import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login';
import Register from '../pages/register'
import Chat from '../pages/chat'
import SetAvatar from '../pages/setAvatar'
// const Login = React.lazy((_)=>import('../pages/login'));
// const Register = React.lazy((_)=>import('../pages/register'))
// const Chat = React.lazy((_)=>import('../pages/chat'))
const GetRoutes = ()=>{
    const routes = useRoutes([
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/chat',
            element: <Chat/>
        },
        {
            path: '/setavatar',
            element: <SetAvatar/>
        },
        {
            path: '/',
            element: <Navigate to="/chat" />,
        },
    ])
    return routes
}

export default GetRoutes