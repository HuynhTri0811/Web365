import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import './KienThuc.css';

const KienThuc = () => {
    return (
        <div className='p-3 bg-light rounded shadow'>
            <div>
                <h2>Kiến thức</h2>
                <p>Kho tài liệu tổng hợp kiến thức về theo dõi phát triển và can thiệp.</p>
            </div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 2, md: 2 }}
            >
                <Box className="card" >
                    <div className="card-body item1">
                        <div className='card-danhsach'>
                            <div className='new-header-card'>
                                <h5 className="card-title"> SỰ PHÁT TRIỂN THÔNG THƯỜNG CỦA TRẺ </h5>
                            </div>
                            <div className='card-body-new'>
                                <p className="card-text">Cùng tìm hiểu các mốc phát triển về vận động, ngôn ngữ, nhận thức và cảm xúc của trẻ và những trò chơi, tài liệu hữu ích để giúp trẻ phát triển tốt ở từng lứa tuổi</p>
                            </div>

                        </div>
                        <div className='btn-XemChiTiet'>
                        <Link to='/' className="btn btn-danger">Xem chi tiết </Link>
                        </div>
                    </div>
                </Box>
                <Box className="card item2">
                    <div className="card-body">
                        <div className='card-danhsach'>
                            <div className='new-header-card'>
                                <h5 className="card-title"> THEO DÕI VÀ SÀNG LỌC PHÁT TRIỂN CHO TRẺ</h5>
                            </div>
                            <div className='card-body-new'>
                                <p className="card-text">Sàng lọc phát triển định kỳ cho trẻ theo từng độ tuổi là rất quan trọng để nhận biết sớm các dấu hiệu chậm phát triển</p>
                            </div>
                        </div>
                        <div className='btn-XemChiTiet'>
                        <Link to='/' className="btn btn-danger">Xem chi tiết </Link>
                        </div>
                    </div>
                </Box>
                <Box className="card item3">
                    <div className="card-body">
                        <div className='card-danhsach'>
                            <div className='new-header-card'>
                                <h5 className="card-title">CÁC DẠNG KHUYẾT TẬT PHÁT TRIỂN THƯỜNG GẶP Ở TRẺ</h5>
                            </div>
                            <div className='card-body-new'>
                                <p className="card-text">Khuyết tật phát triển là gì? Trẻ có nguy cơ gặp phải dạng khuyết tật phát triển nào nhất?</p>
                            </div>
                        </div>
                        <div className='btn-XemChiTiet'>
                        <Link to='/' className="btn btn-danger">Xem chi tiết </Link>
                        </div>
                    </div>
                </Box>
            </Stack>
            <div className='HoiDap'>

                <Grid2 container spacing={3}>
                    <Grid2 size={8}>
                        <h3>Hỏi - đáp</h3>
                        <p>Tổng hợp các câu hỏi thường gặp của phụ huynh về các vấn đề theo dõi, phát triển và can thiệp cho trẻ</p>
                    </Grid2>
                    <Grid2 size={4}>
                        <h3>Hỏi - đáp</h3>
                        <p>Tổng hợp các câu hỏi thường gặp của phụ huynh về các vấn đề theo dõi, phát triển và can thiệp cho trẻ</p>
                    </Grid2>
                </Grid2>
                <Link to='/' className="btn btn-danger">Xem chi tiết </Link>
            </div>

        </div>
    );
};

export default KienThuc;
