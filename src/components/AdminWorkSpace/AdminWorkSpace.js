//import styles from './AdminWorkSpace.module.css'
import AdminWorkspaceInput from './AdminWorkspaceInput/AdminWorkspaceInput';

const AdminWorkSpace = () => {
  return (
    <>
      <h1>Hello Natasha</h1>
      <AdminWorkspaceInput type="text" text="Назва" />
      <AdminWorkspaceInput type="text" text="ID" />
      <AdminWorkspaceInput type="date" text="Дата" />
    </>
  );
};

export default AdminWorkSpace;
