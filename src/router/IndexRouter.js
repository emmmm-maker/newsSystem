import AuthComponent from '@/components/AuthComponent/AuthComponent'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import NewsSandBox from '@/pages/SandBox/NewsSandBox'
import RoleList from '@/pages/RightManage/Role/RoleList'
import UserList from '@/pages/UserManage/List'
import RightList from '@/pages/RightManage/Right/RightList'
import { Navigate } from 'react-router-dom'
import NoPermission from '@/pages/NoPermission/NoPermission'

const routers = [
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/',
        element: (
            <AuthComponent>
                <NewsSandBox></NewsSandBox>
            </AuthComponent>
        ),

        children: [
            {
                path: 'home',
                element: <Home></Home>,
            },
            {
                path: 'user-manage/list',
                element: <UserList></UserList>,
            },
            {
                path: 'right-manage/role/list',
                element: <RoleList></RoleList>,
            },
            {
                path: 'right-manage/right/list',
                element: <RightList></RightList>,
            },
            {
                path: '',
                element: <Navigate to="home" replace></Navigate>,
            },
            {
                path: '*',
                element: <NoPermission></NoPermission>,
            },
        ],
    },
]
export default routers
