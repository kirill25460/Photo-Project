import { useState } from 'react';
import AdminAutorisation from 'components/AdminAutorisation/AdminAutorisation';
import AdminWorkSpace from 'components/AdminWorkSpace/AdminWorkSpace';

const AdminPanel = () => {  

    const [isLoading, setLoading] = useState()

    return (
        <>
            {!isLoading ? <AdminAutorisation setLoading={setLoading}/> :  <AdminWorkSpace/>}
        </>
    )
}


export default AdminPanel;
