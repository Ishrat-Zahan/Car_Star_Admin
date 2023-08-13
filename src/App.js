import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import NoPage from './components/NoPage';
import Car from './components/Car';
import CarManage from './components/pages/car/CarManage';
import CarCreate from './components/pages/car/CarCreate';
import ContactCreate from './components/pages/contact/ContactCreate';
import ContactManage from './components/pages/contact/ContactManage';
import CustomerManage from './components/pages/customer/CustomerManage';
import CustomerCreate from './components/pages/customer/CustomerCreate';
import EmployeeCreate from './components/pages/employee/EmployeeCreate';
import EmployeeManage from './components/pages/employee/EmployeeManage';
import SellsManage from './components/pages/sells/SellsManage';
import SellsCreate from './components/pages/sells/SellsCreate';
import ReportCreate from './components/pages/report/ReportCreate';

function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="nav" element={<Nav />} />
          <Route path="sidebar" element={<Sidebar />} />      
          <Route path="car" element={<Car />} />
          <Route path="managecar" element={<CarManage />} />
          <Route path="createcar" element={<CarCreate />} />
          <Route path="createcontact" element={<ContactCreate />} />
          <Route path="managecontact" element={<ContactManage />} />
          <Route path="managecustomer" element={<CustomerManage />} />
          <Route path="createcustomer" element={<CustomerCreate />} />
          <Route path="createemployee" element={<EmployeeCreate />} />
          <Route path="manageemployee" element={<EmployeeManage />} />
          <Route path="managesells" element={<SellsManage />} />
          <Route path="createsells" element={<SellsCreate />} />
          <Route path="createreport" element={<ReportCreate />} />
          <Route path="createreport/:id" element={<ReportCreate />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
