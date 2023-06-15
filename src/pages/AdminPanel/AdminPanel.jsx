import styles from './AdminPanel.module.css'
import AdminPanelBtn from 'components/AdminPanelBtn/AdminPanelBtn'
import AdminPanelInput from 'components/AdminPanelInput/AdminPanelInput'
import AdminWorkSpace from 'components/AdminWorkSpace/AdminWorkSpace'
import { useState, useEffect } from 'react'


const asd = {
    login: 'Natasha',
    password:'natashadmin'
}

const AdminPanel = () => {  

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState({});
    const [isLoading, setLoading] = useState(true)

    const getAuth = () => {
        setAuth({ login, password });
        setLoading(false)
    }

    useEffect(() => {
        console.log(auth);
      }, [auth]);

    return (
        <>
            {!isLoading ? null : <AdminPanelInput text={'Write your email'} type={'email'} value={login || ''} setValue={setLogin}/>}
            {!isLoading ? null : <AdminPanelInput text={'Write your password'} type={'password'} value={password || ''}  setValue={setPassword}/>}
            {!isLoading ? null : <AdminPanelBtn getAuth={getAuth} />}
            { asd.login === auth.login && asd.password === auth.password ? <AdminWorkSpace/> : null }
        </>
    )
}


export default AdminPanel;