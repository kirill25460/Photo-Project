import PropTypes from 'prop-types'
//import { useState } from 'react'


const AdminPanelInput = ({ text, type, value, setValue }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value)
  }

  return (
    <>
      <input placeholder={text} type={type} value={value} onChange={handleChange} />
    </>
  )
}

AdminPanelInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  getAuth: PropTypes.func
}


export default AdminPanelInput;

