import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';
const Login = React.lazy((_)=>import('../pages/login'));
const Register = React.lazy((_)=>import('../pages/register'))
const Chat = React.lazy((_)=>import('../pages/chat'))
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
        }
    ])
    return routes
}

export default GetRoutes