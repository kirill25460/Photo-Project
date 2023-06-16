import PropTypes from 'prop-types'
import styles from './AdminAutorisation.module.css'
import AdminPanelBtn from 'components/AdminPanelBtn/AdminPanelBtn'
import AdminPanelInput from 'components/AdminPanelInput/AdminPanelInput'
import { useState } from 'react'

const asd = {
    login: 'Natasha',
    password:'natashadmin'
}

const AdminAutorisation = ({setLoading}) => {
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState({}); 
    console.log(auth)

    const getAuth = () => {
        setAuth({ login, password });
        setLoading(asd.login === login && asd.password === password);
    }

    return (
        <div className={styles.container}>
            <AdminPanelInput className={styles.auth__input} text={'Write your email'} type={'email'} value={login || ''} setValue={setLogin}/>
            <AdminPanelInput className={styles.auth__input} text={'Write your password'} type={'password'} value={password || ''}  setValue={setPassword}/>
            <AdminPanelBtn className={styles.auth__button} getAuth={getAuth} />
        </div>
    )
}

AdminAutorisation.propTypes = {
    text: PropTypes.string
}

export default AdminAutorisation;