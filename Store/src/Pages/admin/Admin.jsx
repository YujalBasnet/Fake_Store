import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Admin = () => {
    const [value, setValue] = React.useState([]);


    const handleDelete = async (id) => {
        await axios.delete(`https://fakestoreapi.com/users/${id}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const fetchData = async () => {
        await axios.get('https://fakestoreapi.com/users').then((res) => {
            console.log(res.data);
            setValue(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        
<div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Fake Store Users
    </h1>

    <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

        <table className="w-full text-left">

            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Username</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Address</th>
                    <th className="px-6 py-4">Action</th>
                </tr>
            </thead>

            <tbody>

                {value.map((user) => (
                    <tr
                        key={user.id}
                        className="border-b hover:bg-gray-100 transition"
                    >

                        <td className="px-6 py-4 font-semibold">
                            {user.id}
                        </td>

                        <td className="px-6 py-4 font-bold text-gray-800">
                            {user.name.firstname} {user.name.lastname}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                            {user.email}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                            {user.username}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                            {user.phone}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                            {user.address.city}, {user.address.street}, {user.address.zipcode}
                        </td>

                        <td className="px-6 py-4">
                            <div className="flex gap-2">
                        
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Edit
                                    </button>
                        
                                <button onClick={()=> handleDelete(user.id)} 
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                    Delete
                                </button>
                        
                            </div>
                        </td>

                    </tr>
                ))}

            </tbody>

        </table>

    </div>

</div>


    );
};

export default Admin;