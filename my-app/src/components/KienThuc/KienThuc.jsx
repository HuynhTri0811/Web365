import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './KienThuc.css';
import HoiDap1 from '../../assets/HoiDap1.jpg';

const KienThuc = () => {
    const showAlert = () => { window.alert('Đã gửi thành công câu hỏi');}


    return (
        <div className='p-3 bg-light rounded shadow'>
            <div>
                <h2>Kiến thức</h2>
                <p>Kho tài liệu tổng hợp kiến thức về theo dõi phát triển và can thiệp.</p>
            </div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 2, md: 2 }}
                justifyContent="center"
            >
                <Box className="card" sx={{ width: { xs: '100%', sm: '33%' }, borderRadius: "20px" }}>
                    <div className="card-body item1">
                        <div className='card-danhsach'>
                            <div className='new-header-card' style={{ borderRadius: "20px 20px 0px 0px", backgroundColor: "#E9967A" }}>
                                <h5 className="card-title">SỰ PHÁT TRIỂN THÔNG THƯỜNG CỦA TRẺ</h5>
                            </div>
                            <div className='card-body-new'>
                                <p className="card-text">Cùng tìm hiểu các mốc phát triển về vận động, ngôn ngữ, nhận thức và cảm xúc của trẻ và những trò chơi, tài liệu hữu ích để giúp trẻ phát triển tốt ở từng lứa tuổi.</p>
                            </div>
                        </div>
                        <div className='btn-XemChiTiet'>
                            <Link to='/PageNotFound' className="btn btn-danger">Xem chi tiết</Link>
                        </div>
                    </div>
                </Box>
                <Box className="card item2" sx={{ width: { xs: '100%', sm: '33%' }, borderRadius: "20px" }}>
                    <div className="card-body">
                        <div className='card-danhsach'>
                            <div className='new-header-card' style={{ borderRadius: "20px 20px 0px 0px", backgroundColor: "#32CD32" }}>
                                <h5 className="card-title">THEO DÕI VÀ SÀNG LỌC PHÁT TRIỂN CHO TRẺ</h5>
                            </div>
                            <div className='card-body-new'>
                                <p className="card-text">Sàng lọc phát triển định kỳ cho trẻ theo từng độ tuổi là rất quan trọng để nhận biết sớm các dấu hiệu chậm phát triển.</p>
                            </div>
                        </div>
                        <div className='btn-XemChiTiet'>
                            <Link to='/PageNotFound' className="btn btn-danger">Xem chi tiết</Link>
                        </div>
                    </div>
                </Box>
                <Box className="card item3" sx={{ width: { xs: '100%', sm: '33%' }, borderRadius: "20px" }}>
                    <div className="card-body">
                        <div className='card-danhsach'>
                            <div className='new-header-card' style={{ borderRadius: "20px 20px 0px 0px", backgroundColor: "#1E90FF" }}>
                                <h5 className="card-title">CÁC DẠNG KHUYẾT TẬT PHÁT TRIỂN THƯỜNG GẶP Ở TRẺ</h5>
                            </div>
                            <div className='card-body-new'>
                                <p className="card-text">Khuyết tật phát triển là gì? Trẻ có nguy cơ gặp phải dạng khuyết tật phát triển nào nhất?</p>
                            </div>
                        </div>
                        <div className='btn-XemChiTiet'>
                            <Link to='/PageNotFound' className="btn btn-danger">Xem chi tiết</Link>
                        </div>
                    </div>
                </Box>
            </Stack>
            <Stack>
            <div className='HoiDap'>
                    <Box xs={{width:"50%"}}>
                        <h3>Hỏi - đáp</h3>
                        <p>Tổng hợp các câu hỏi thường gặp của phụ huynh về các vấn đề theo dõi, phát triển và can thiệp cho trẻ.</p>
                        <input placeholder="Email người đặt câu hỏi"></input>
                        <div className='messages' style={{ marginTop: 20 }}>
                            <textarea id="message" className='form-control responsive-textarea' name="message" rows="4" cols="90" placeholder="Câu hỏi" style={{ padding: 10 }}></textarea>
                        </div>
                        <Link onClick={showAlert} className="btn btn-danger">Gửi câu hỏi</Link>
                    </Box>
            </div>
            </Stack>
        </div>
    );

};

export default KienThuc;
