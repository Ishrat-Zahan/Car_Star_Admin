import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const CarManage = () => {

  const [car, setCar] = useState([]);

  useEffect(() => {
    readData();

  }, []);

 

  const readData = () => {

    fetch('http://localhost/R53/React/admin/src/api/carapi.php')
      .then(response => response.json())
      .then(data => {
        setCar(data);

        // console.log(data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });

  }

  const handleDelete = (id) => {

    // alert(id);

    fetch(`http://localhost/R53/React/admin/src/api/carapidelete.php?id=${id}`, {
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

      <h1 style={{ textDecoration: 'underline' }} className="text-center text-primary mt-2">Manage Car</h1>

      <table class="table m-3 ms-3 p-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Discount Price</th>
            {/* <th scope="col">Description</th> */}
            <th scope="col">Action</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {car.map(c => (
            <tr>
              <th scope="row">{c.id}</th>

              <td>{c.title}</td>
              <td>{c.price}</td>
              <td>{c.d_price}</td>
              {/* <td>{c.description}</td> */}
              <td onClick={() => handleDelete(c.id)} className='btn btn-outline-primary mt-2 me-2'>Delete</td>
              <td className='btn btn-outline-danger mt-2'>Edit</td>
            </tr>
          ))}

        </tbody>
      </table>



    </>
  )
}
export default CarManage
