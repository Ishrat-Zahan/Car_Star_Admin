import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Content from './Content';

const Sidebar = () => {
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCars"
                  aria-expanded="false"
                  aria-controls="collapseCars"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Cars
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseCars" aria-labelledby="headingCars" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/createcar" className="nav-link">Create Car</Link>
                    <Link to="/managecar" className="nav-link">Manage Car</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseContact"
                  aria-expanded="false"
                  aria-controls="collapseContact"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Contact
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseContact" aria-labelledby="headingContact" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/createcontact" className="nav-link">Create Contact</Link>
                    <Link to="/managecontact" className="nav-link">Manage Contact</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCustomer"
                  aria-expanded="false"
                  aria-controls="collapseCustomer"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Customer
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseCustomer" aria-labelledby="headingCustomer" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/createcustomer" className="nav-link">Create Customer</Link>
                    <Link to="/managecustomer" className="nav-link">Manage Customer</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEmployee"
                  aria-expanded="false"
                  aria-controls="collapseEmployee"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Employee
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseEmployee" aria-labelledby="headingEmployee" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/createemployee" className="nav-link">Create Employee</Link>
                    <Link to="/manageemployee" className="nav-link">Manage Employee</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSells"
                  aria-expanded="false"
                  aria-controls="collapseSells"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Sells
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseSells" aria-labelledby="headingSells" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/createsells" className="nav-link">Create Sells</Link>
                    <Link to="/managesells" className="nav-link">Manage Sells</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseReport"
                  aria-expanded="false"
                  aria-controls="collapseReport"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Report
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseReport" aria-labelledby="headingReport" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/createreport" className="nav-link">Create Report</Link>
                    {/* <Link to="/managereport" className="nav-link">Manage Report</Link> */}
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEmi"
                  aria-expanded="false"
                  aria-controls="collapseEmi"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  EMI Report
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseEmi" aria-labelledby="headingEmi" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/emireport" className="nav-link">EMI Report</Link>
                    <Link to="/emidetails" className="nav-link">EMI Details</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSystem"
                  aria-expanded="false"
                  aria-controls="collapseSystem"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  System
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseSystem" aria-labelledby="headingSystem" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to="/user" className="nav-link">User</Link>
                    <Link to="/changepassword" className="nav-link">Change Password</Link>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLogout"
                  aria-expanded="false"
                  aria-controls="collapseLogout"
                >
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Log Out
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
        <Content />
      </div>
    </>
  );
};

export default Sidebar;
