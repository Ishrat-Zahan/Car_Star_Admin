import React, { useState } from 'react';

const CustomerCreate = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRePassWord] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost/R53/React/admin/src/api/customercreate.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name, last_name, email, password, re_password }),
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

            <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Create Customer</h1>

            <form className='m-3 p-2' onSubmit={handleFormSubmit}>
                <label className='form-label'>First Name</label>
                <input
                    value={first_name}
                    onChange={e => setFirstName(e.target.value)}
                    className='form-control'
                    type='text'
                />
                <label className='form-label'>Last Name</label>
                <input
                    value={last_name}
                    onChange={e => setLastName(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <label className='form-label'>Email</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='form-control'
                    type='email'
                />

                <label className='form-label'>Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <label className='form-label'>Re type Password</label>
                <input
                    value={re_password}
                    onChange={e => setRePassWord(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <input type='submit' className='btn btn-outline-primary mt-3' value="Create" />
            </form>
        </>
    )
}
export default CustomerCreate;

