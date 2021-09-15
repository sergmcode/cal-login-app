import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

export default function MenuTest() {
    const { isAuth, user } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <>
            {isAuth ?
                <Menu mode='horizontal'>
                    <Menu.Item key='user_name'>{user.username}</Menu.Item>
                    <Menu.Item key='logout' onClick={() => dispatch(AuthActionCreators.logout())} icon={<LogoutOutlined />}>Logout</Menu.Item>
                </Menu>
                :
                <Menu mode='horizontal'>
                    <Menu.Item key='login' icon={<LoginOutlined />}>Login</Menu.Item>
                </Menu>}
        </>
    )
}
