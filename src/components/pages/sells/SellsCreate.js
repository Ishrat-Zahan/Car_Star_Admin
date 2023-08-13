import React from 'react'
import './Sells.css'
import { useEffect } from 'react'
import { useState } from 'react';


const SellsCreate = () => {
  useEffect(() => {
    readData();

}, []);
const [cars, setCars] = useState([]);
const readData = () => {

  fetch('http://localhost/R53/React/admin/src/api/sellcreate.php')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setCars(data.cars);
          

          // console.log(data);
      })
      .catch(error => {
          console.log('An error occurred:', error);
      });

}

  return (


    <div className="container">
      <div className="page-content container">
        <div className="page-header text-blue-d2">
          <h1 className="page-title text-secondary-d1">
            Seller
            <small className="page-info">
              <i className="fa fa-angle-double-right text-80"></i>
              ID: #10
            </small>
          </h1>
        </div>

        <div className="container px-0">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="row">
                <div className="col-12">
                  <div className="text-center text-150">
                    <span className="text-primary-m1">
                      <strong>Car Star</strong>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="row brc-default-l1 mx-n1 mb-4" />
              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <span className="text-sm text-grey-m2 align-middle">From:</span>
                    <span className="text-600 text-110 text-blue align-middle">Kazipara</span>
                  </div>
                  <div className="text-grey-m2">
                    <div className="my-1">House:10,Road:03,Mirpur</div>
                    <div className="my-1">Dhaka</div>
                    <div className="my-1">
                      <i className="fa fa-phone fa-flip-horizontal text-secondary"></i>{' '}
                      <b className="text-600">0179999</b>
                    </div>
                  </div>
                </div>
                <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                  <hr className="d-sm-none" />
                  <div className="text-grey-m2">
                    <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125"></div>
                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>{' '}
                      <span className="text-600 text-90">Seller ID:</span> #10
                    </div>
                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>{' '}
                      <span className="text-600 text-90">Issue Date:</span> Apr 12, 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="row my-2 mx-1 justify-content-center table-responsive">
                  <table className="table table-striped table-borderless">
                    <thead style={{ backgroundColor: '#84B0CA' }} className="text-white">
                      <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Sub-Total</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th></th>
                        <th>
                          <select id="cmbProduct" name="cmbProduct">
                            {cars.map(c => (
                              <option value="{c.id}">{c.title}</option>
                            ))}
                          </select>
                        </th>
                        <th>
                          <input type="text" id="txtPrice" />
                        </th>
                        <th>
                          <input type="text" id="txtQty" />
                        </th>
                        <th>
                          <input type="text" id="txtDiscount" />
                        </th>
                        <th></th>
                        <th>
                          <input type="button" id="btnAddToCart" value=" + " />
                        </th>
                      </tr>
                    </tbody>
                    <tbody id="items">
                      <tr>
                        <td>1</td>
                        <td>New 2023 Honda Civic Sedan</td>
                        <td data-field="price">800000</td>
                        <td data-field="qty">1</td>
                        <td data-field="discount">0</td>
                        <td data-field="subtotal">800000</td>
                        <td>
                          <input type="button" className="delete" data-id="4" value="-" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div>{/* Remark <br/><textarea id="txtRemark"></textarea> */}</div>
                  </div>
                  <div className="table-responsive col-4">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th style={{ width: '50%' }}>Subtotal:</th>
                          <td id="subtotal">42000</td>
                        </tr>
                        <tr>
                          <th>Total:</th>
                          <td id="net-total">44100</td>
                        </tr>
                        <tr className="mt-4">
                          <th></th>
                          <td id="net-total">
                            <button className="btn btn-success">Process Order</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="page-tools">
        <div className="action-buttons">
          <a className="btn bg-white btn-light mx-1px text-95 me-3" href="#" data-title="Print">
            <i className="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
            Print
          </a>
          <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
            <i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
            Export
          </a>
        </div>
      </div>
    </div>
  )
}
export default SellsCreate;
