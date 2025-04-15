import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUSerAPI } from '../services/api.service';

const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([])

    //empty array => run once
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUSerAPI()
        setDataUsers(res.data)
    }

    //lift-up state
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage;