import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuth = !!localStorage.getItem('token')
export default function AuthComponent(props) {
    return <div>{isAuth ? props.children : <Navigate to="/login" replace></Navigate>}</div>
}
