import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';



const CustomerManage = () => {

    useEffect(() => {
        readData();

    }, []);

    const [customer, setCustomer] = useState([]);
    // console.log(contact);

    const readData = () => {

        fetch('http://localhost/R53/React/admin/src/api/customermanage.php')
            .then(response => response.json())
            .then(data => {
                setCustomer(data);

                // console.log(data);
            })
            .catch(error => {
                console.log('An error occurred:', error);
            });

    }


    const handleDelete = (id) => {

        // alert(id);

        fetch(`http://localhost/R53/React/admin/src/api/customerdlt.php?id=${id}`, {
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
        <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Manage Customer </h1>

            <table class="table m-3 p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {customer.map(c => (
                        <tr>
                            <th scope="row">{c.id}</th>

                            <td>{c.first_name}</td>
                            <td>{c.last_name}</td>
                            <td>{c.email}</td>
                            <td onClick={() => handleDelete(c.id)} className='btn btn-outline-primary mt-2 me-2'>Delete</td>
                            <td className='btn btn-outline-danger mt-2'>Edit</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}
export default CustomerManage;
