const AdminWorkspaceInput = ({ text, type }) => {
    return ( <>
        <label>{text}</label>
        <input type={type}></input>
    </> );
}
 
export default AdminWorkspaceInput;