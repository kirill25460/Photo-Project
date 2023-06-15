import styles from './AdminPanel.module.css'
import AdminPanelBtn from 'components/AdminPanelBtn/AdminPanelBtn'
import AdminPanelInput from 'components/AdminPanelInput/AdminPanelInput'
import { useState } from 'react'

const AdminPanel = () => {  



    const [auth, setAuth] = useState({});

    const getAuth = (login, password) => {
        setAuth({ login, password });
        console.log(auth)
    }

    return (
        <div className={styles.containerInput}>
            <AdminPanelInput className={styles.inputLogin} text={'Write your email'} type={'email'} getAuth={getAuth}/>
            <AdminPanelInput className={styles.inputPassword} text={'Write your password'} type={'password'} getAuth={getAuth}/>
            <AdminPanelBtn getAuth={getAuth} />
        </div>
    )
}


export default AdminPanel;
