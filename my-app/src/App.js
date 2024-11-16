import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import KhoaHoc from './components/KhoaHoc/KhoaHoc';
import KienThuc from './components/KienThuc/KienThuc';
import HuongDanCanThiep from './components/HuongDanCanThiep/HuongDanCanThiep';
import DayTreHieuVaLamTheoYeuCau from './components/DayTreHieuVaLamTheoYeuCauCoBan/DayTreHieuVaLamTheoYeuCau';
import DayTreTapTrungMucCao from './components/DayTreTapTrungMucCao/DayTreTapTrungMucCao';
import DayTreGiaiQuyetTinhHuongCoBan from './components/DayTreGiaiQuyetTinhHuongCoBan/DayTreGiaiQuyetTinhHuongCoBan';
import SuPhatTrienThongThuongCuaTre from './components/KienThuc/SuPhatTrienThongThuongCuaTre/SuPhatTrienThongThuongCuaTre';
import TheoDoiVaSangLocPhatTrienChoTre from './components/KienThuc/TheoDoiVaSangLocPhatTrienChoTre/TheoDoiVaSangLocPhatTrienChoTre';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container pt-5 pb-5 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/KhoaHoc" element={<KhoaHoc />} />
            <Route path="/KienThuc" element={<KienThuc />} />
            <Route path="/PageNotFound" element={<PageNotFound />} />
            <Route path="/KienThuc/SuPhatTrienThongThuongCuaTre" element={<SuPhatTrienThongThuongCuaTre />} />
            <Route path="/KienThuc/TheoDoiVaSangLocPhatTrienChoTre" element={<TheoDoiVaSangLocPhatTrienChoTre />} />
            <Route path="/HuongDanCanThiep" element={<HuongDanCanThiep />} />
            <Route path='/HuongDanCanThiep/DayTreChoiGiaVo' element={<DayTreHieuVaLamTheoYeuCau />} />
            <Route path='/HuongDanCanThiep/DayTreTapTrungMucCao' element={<DayTreTapTrungMucCao />} />
            <Route path='/HuongDanCanThiep/DayTreGiaiQuyetTinhHuongCoBan' element={<DayTreGiaiQuyetTinhHuongCoBan />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
