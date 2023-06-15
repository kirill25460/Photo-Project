import PropTypes from 'prop-types'
import { useState } from 'react'

const AdminPanelBtn = ({ text, type, className, getAuth}) => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const handleAuth = (e) => {
        const {value} = e.currentTarget;
        setLogin(value)
        setPassword(value)
        getAuth(login, password)
    }

    return (
        <>
            <input className={className} placeholder={text} type={type} onChange={handleAuth}></input>
        </>
    )
}

AdminPanelBtn.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
}

export default AdminPanelBtn;
