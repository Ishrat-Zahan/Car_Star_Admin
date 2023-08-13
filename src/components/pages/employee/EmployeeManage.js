import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const EmployeeManage = () => {

    useEffect(() => {
        readData();

    }, []);

    const [employee, setEmployee] = useState([]);
    // console.log(contact);

    const readData = () => {

        fetch('http://localhost/R53/React/admin/src/api/employapi.php')
            .then(response => response.json())
            .then(data => {
                setEmployee(data);

                // console.log(data);
            })
            .catch(error => {
                console.log('An error occurred:', error);
            });

    }


    const handleDelete = (id) => {

        // alert(id);

        fetch(`http://localhost/R53/React/admin/src/api/employdltapi.php?id=${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    alert('Item deleted successfully');
                    readData();

                } else {
                    console.log('Failed to delete item');

                }
            })
            .catch(error => {
                console.log('An error occurred:', error);

            });

    }
    return (
        <>

            <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Manage Employee</h1>

            <table class="table m-3 p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">NID No</th>
                        <th scope="col">Shift</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {employee.map(c => (
                        <tr>
                            <th scope="row">{c.id}</th>

                            <td>{c.name}</td>
                            <td>{c.mobile}</td>
                            <td>{c.nid}</td>
                            <td>{c.shift}</td>
                            <td>{c.position}</td>
                            <td onClick={() => handleDelete(c.id)} className='btn btn-outline-primary mt-2 me-2'>Delete</td>
                            <td className='btn btn-outline-danger mt-2'>Edit</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}
export default EmployeeManage;
