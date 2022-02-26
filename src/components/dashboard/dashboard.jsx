import React, { useEffect, useState } from 'react'
import "./dashBoard.css"
import axios from 'axios'

const Dashboard = () => {
    const [userData, setUserData] = useState([])

    const apiData = async () => {
        try {
            const res = await axios.get("http://jsonplaceholder.typicode.com/users")
            setUserData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        apiData()
    }, [])

    return (
        <>
            <div className="dashboard">
                <h1 > Dashboard</h1>
                <div className="data-block">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                        {
                            userData.map((elem) => elem &&
                                <tr>
                                    <td>{elem.name}</td>
                                    <td>{elem.username}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.address.city}</td>
                                    <td>{elem.phone}</td>
                                    <td>{elem.website}</td>
                                </tr>
                            )}
                    </table>
                </div>
            </div>

        </>
    )
}

export default Dashboard








