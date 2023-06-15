import PropTypes from 'prop-types'
import styles from './AdminPanelBtn.module.css'

const AdminPanelBtn = ({ getAuth }) => {
  return (
    <>
      <button onClick={getAuth} type='button'>Submit</button>
    </>
  )
}

AdminPanelBtn.propTypes = {
  getAuth: PropTypes.func
}

export default AdminPanelBtn;