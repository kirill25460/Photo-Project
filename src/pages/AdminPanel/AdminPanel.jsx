import styles from './AdminPanel.module.css'
import AdminPanelBtn from 'components/AdminPanelBtn/AdminPanelBtn'
import AdminPanelInput from 'components/AdminPanelInput/AdminPanelInput'
import { useState } from 'react'

const AdminPanel = () => {  

    const asd = {
        login: 'Natasha',
        password:'qweewqqwe'
    }

    const [auth, setAuth] = useState({});

    const getAuth = (login, password) => {
        setAuth({ login, password });
        console.log(auth)
    }

    return (
        <>
            <AdminPanelInput text={'Write your email'} type={'email'} getAuth={getAuth}/>
            <AdminPanelInput text={'Write your password'} type={'password'} getAuth={getAuth}/>
            <AdminPanelBtn getAuth={getAuth} />
        </>
    )
}


export default AdminPanel;