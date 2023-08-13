import React, { useState } from 'react';

const ContactCreate = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [messege, setMessege] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost/R53/React/admin/src/api/createcontact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, messege }),
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
            
            <form onSubmit={handleFormSubmit}>
                <label className='form-label'>Name</label>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
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

                <label className='form-label'>Phone</label>
                <input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <label className='form-label'>Message</label>
                <input
                    value={messege}
                    onChange={e => setMessege(e.target.value)}
                    className='form-control'
                    type='text'
                />

                <input type='submit' className='btn btn-outline-primary mt-3' value="Create" />
            </form>
        </>
    )
}
export default ContactCreate;
