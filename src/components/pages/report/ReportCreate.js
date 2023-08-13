import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReportCreate = () => {
  const { id } = useParams();

  const [cars, setCars] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [carId, setCarId] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  useEffect(() => {
    setCustomerId(id);
    fetchReportData();
  }, [id]);

  const fetchReportData = () => {
    fetch('http://localhost/R53/React/admin/src/api/reportcreate.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data to check its format
        setCars(data.cars);
        setEmployees(data.employee);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const reportData = {
      customer_id: customerId,
      car_id: carId,
      employee_id: employeeId,
      date: date,
      place: place,
    };
  
    fetch('http://localhost/r53/React/admin/src/api/reportcreate2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reportData),
    })
      .then((response) => response.text()) 
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className='m-4'>
        <form className='m-3 p-2' onSubmit={handleFormSubmit}>
          <div className='card-header'></div>
          <div className='card-body'>
            <div className='row mb-4'>
              <div className='col-sm-4'>
                <h6 className='mb-3'>From:</h6>
                <div>
                  <strong>Car Star</strong>
                </div>
                <div>Kazipara</div>
                <div>Mirpur</div>
                <div>Email: carstar@.com</div>
                <div>Phone: 0189999999</div>
              </div>
              <div className='col-sm-4'></div>
              <div className='col-sm-4'>
                <h6 className='mb-3'>Details:</h6>
                <div>
                  <strong>Customer</strong>
                </div>
                <div>Customer ID:{id}</div>
                <div>Email: asif@.com</div>
                <div>Phone: 0189555555</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span style={{ display: 'flex', justifyContent: 'center' }}>
                <h4>Reports</h4>
              </span>
            </div>
            <table className='table table-bordered'>
              <thead style={{ backgroundColor: 'rgb(47, 167, 227)', color: 'white' }} className='thead-dark'>
                <tr>
                  <th>Info</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='col-md-9'>
                    <h5>Interested Car</h5>
                  </td>
                  <td className='col-md-3'>
                    <select
                      value={carId}
                      onChange={(e) => setCarId(e.target.value)}
                      className='form-select ng-untouched ng-pristine ng-valid'
                    >
                      {cars.map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.title}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className='col-md-9'>
                    <h5>Appointment Date</h5>
                  </td>
                  <td className='col-md-3'>
                    <p style={{ padding: '10px', fontSize: '18px' }}>
                      <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type='date'
                        className='form-control'
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className='col-md-9'>
                    <h5>Appointment Place</h5>
                  </td>
                  <td className='col-md-3'>
                    <p style={{ padding: '10px', fontSize: '18px' }}>
                      <input
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        type='text'
                        className='form-control'
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className='col-md-9'>
                    <h5>Appointment With</h5>
                  </td>
                  <td className='col-md-3'>
                    <select
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      className='form-select ng-untouched ng-pristine ng-valid'
                    >
                      {employees.map((employee) => (
                        <option key={employee.id} value={employee.id}>
                          {employee.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='row'>
            <div className='row'>
              <div className='col-10'></div>
              <div className='col-2'>
                <button className='btn btn-success'>Process Report</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReportCreate;
