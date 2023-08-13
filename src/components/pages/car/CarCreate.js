import React, { useState } from 'react';

const CarCreate = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [dprice, setDprice] = useState('');
  const [description, setDescription] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/R53/React/admin/src/api/carcreate.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, price, dprice, description }),
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
    <div className="container">
      <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Add New Car</h1>
      <form onSubmit={handleFormSubmit}>

        <div className="form-group">
          <label className="form-label" htmlFor="">Title</label>
          <input name="title" className="form-control" type="text" value={title}
          onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="">Price</label>
          <input name="price" className="form-control" type="text" value={price}
          onChange={e => setPrice(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="">Discount Price</label>
          <input name="d_price" className="form-control" type="text" value={dprice}
          onChange={e => setDprice(e.target.value)}/>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="">Description</label>

          <textarea name="description" className="form-control" value={description}
          onChange={e => setDescription(e.target.value)} ></textarea>
          
        </div>
        
        <input value="Add Product" type='submit' className="btn btn-primary mt-3" />
      </form>
    </div>
  );
};

export default CarCreate;
