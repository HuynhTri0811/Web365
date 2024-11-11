import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'

const Menu = () => { 
  return(
    <nav className="navbar navbar-expand-lg navbar bg">
    <div className="container-fluid">
       <img src={logo} style={{height:"50px",width:"50px"}}/>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to ="/" className='nav-link'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to ="/About" className='nav-link'>Về chúng tôi</Link>
          </li>
          <li className="nav-item">
            <Link to ="/KhoaHoc" className='nav-link'>Khóa học</Link>
          </li>
          <li className="nav-item">
            < Link to ="/KienThuc" className='nav-link'>Kiến thức</Link>
          </li>
          <li className="nav-item">
            < Link to ="/HuongDanCanThiep" className='nav-link'>Hướng dẫn can thiệp</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}


export default Menu;
