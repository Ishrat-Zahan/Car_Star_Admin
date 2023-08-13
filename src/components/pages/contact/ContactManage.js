import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactManage = () => {

    const navigate = useNavigate();
  
    useEffect(() => {
        readData();

    }, []);

    const [contact, setContact] = useState([]);
    // console.log(contact);

    const readData = () => {

        fetch('http://localhost/R53/React/admin/src/api/contactapi.php')
            .then(response => response.json())
            .then(data => {
                setContact(data);

                // console.log(data);
            })
            .catch(error => {
                console.log('An error occurred:', error);
            });

    }


    const handleDelete = (id) => {

        // alert(id);

        fetch(`http://localhost/R53/React/admin/src/api/contactdltapi.php?id=${id}`, {
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
   
    const handleReport = (id) => {
        navigate(`/createreport/${id}`);
        
        // alert(id);

    }
    return (
        <>

            <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Manage Contact</h1>
            <table class="table m-3 ms-3 p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Messege</th>
                        <th scope="col">Action</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {contact.map(c => (
                        <tr>
                            <th scope="row">{c.id}</th>

                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>{c.messege}</td>
                            <td onClick={() => handleDelete(c.id)} className='btn btn-outline-primary mt-2 me-2'>Delete</td>
                            <td className='btn btn-outline-danger mt-2'>Edit</td>
                            <td onClick={() => handleReport(c.id)} className='btn btn-outline-primary ms-2 mt-2'>Report</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}
export default ContactManage;
