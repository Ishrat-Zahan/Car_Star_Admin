import React, { useState } from 'react';

const EmployeeCreate = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [nid, setNid] = useState('');
    const [shift, setShift] = useState('');
    const [position, setPosition] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost/R53/React/admin/src/api/emploeecreate.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, mobile, nid, shift, position }),
        })
            .then((response) => response.json())
            .then((data) => {

                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <>

            <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Create Employee</h1>

            <form className='m-3 p-2' onSubmit={handleFormSubmit}>
                <label className='form-label'>Name</label>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='form-control'
                    type='text'
                />
                <label className='form-label'>Mobile</label>
                <input
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <label className='form-label'>NID No</label>
                <input
                    value={nid}
                    onChange={e => setNid(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <label className='form-label'>Shift</label>
                <input
                    value={shift}
                    onChange={e => setShift(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <label className='form-label'>Position</label>
                <input
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <input type='submit' className='btn btn-outline-primary mt-3' value="Create" />
            </form>
        </>
    )
}
export default EmployeeCreate;
