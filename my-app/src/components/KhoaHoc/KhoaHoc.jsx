import React from 'react';
import Grid2 from '@mui/material/Grid2';
import './KhoaHoc.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const KhoaHoc = () => {
  return (
    <div className='p-3 bg-light rounded shadow'>
      <div>
        <h3>Khóa học dành cho phụ huynh</h3>
      </div>
      <div className='KhoaHocBody'>
        <div className='KhoaHocBody-item'>
          <Grid2 container spacing={3}>
            <Grid2 size={6}>
              <h5>Khóa học can thiệp vui và hiệu quả tại gia đình</h5>
              <p>Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ, chậm phát triển, chậm nói, v.v. được xây dựng từ các phương pháp can thiệp có nhiều bằng chứng và từ kinh nghiệm hướng dẫn can thiệp trên hơn 960 gia đình tại các tỉnh thành Việt Nam và các quốc gia khác, bao gồm Nhật, Singapore, Thái Lan, Úc, Séc, Đức, Mỹ, Canada,...</p>
              <div className='btn-KhoaHoc'>
                <Link to='/'> <a href="#" class="btn btn-danger">Tìm hiểu thêm</a> </Link>
                <Link to='/'> <a href="#" class="btn btn-danger">Đăng ký ngay</a> </Link>
              </div>
            </Grid2>
            <Grid2 size={6}>
              <div className='img-item'>
                <img></img>
              </div>
            </Grid2>
          </Grid2>
        </div>
        <div className='KhoaHocBody-item'>
          <Grid2 container spacing={3}>
            <Grid2 size={6}>
              <div className='img-item'>
                <img></img>
              </div>
            </Grid2>
            <Grid2 size={6}>
              <h5>Khóa học dành cho người chăm sóc (CST)</h5>
              <p>Chương trình tập huấn cho người chăm sóc trẻ có rối loạn phát triển và chậm phát triển (Viết tắt là Chương trình CST) là mô hình do Tổ chức Y tế Thế giới (WHO) xây dựng và cho phép Trung tâm Sáng kiến Sức khỏe và Dân số (C.CIHP) thích ứng, triển khai thực hiện trong khuôn khổ Dự án Tôi lớn mạnh trong thời gian từ 2019 đến 2021 và Dự án Hòa nhập 1 (do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, dưới sự quản lý của Chủ dự án Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET)) từ năm 2022.</p>
              <div className='btn-KhoaHoc'>
                <Link to='/'> <a href="#" class="btn btn-danger">Tìm hiểu thêm</a> </Link>
                <Link to='/'> <a href="#" class="btn btn-danger">Đăng ký ngay</a> </Link>
              </div>
            </Grid2>
          </Grid2>
        </div>
        <div className='KhoaHocBody-item'>
          <Grid2 container spacing={3}>
            <Grid2 size={6}>
              <h5>Khóa học về Hỗ trợ tâm lý</h5>
              <p>Chương trình Hỗ trợ sức khỏe tinh thần được xây dựng nhằm giúp các cha mẹ chăm sóc sức khỏe tinh thần của bản thân tốt hơn trên hành trình đồng hành cùng con. Hoạt động này nằm trong khuôn khổ Dự án Hòa nhập 1 do USAID tài trợ, dưới sự quản lý của NACCET (trực thuộc Bộ Quốc phòng) và do CCIHP trực tiếp triển khai. Các chi phí của hoạt động sẽ do Dự án chi trả. Phụ huynh tham gia hoàn toàn <b>MIỄN PHÍ.</b></p>
              <div className='btn-KhoaHoc'>
                <Link to='/'> <a href="#" class="btn btn-danger">Tìm hiểu thêm</a> </Link>
                <Link to='/'> <a href="#" class="btn btn-danger">Đăng ký ngay</a> </Link>
              </div>
            </Grid2>
            <Grid2 size={6}>
              <div className='img-item'>
                <img></img>
              </div>
            </Grid2>
          </Grid2>
        </div>
        <div className='KhoaHocBody-item'>
          <Grid2 container spacing={3}>
            <Grid2 size={6}>
              <div className='img-item'>
                <img></img>
              </div>
            </Grid2>
            <Grid2 size={6}>
              <h5>Khóa học Hỗ trợ hành vi tích cực</h5>
              <p>Khóa học "Hỗ trợ hành vi tích cực" dành cho phụ huynh (Viết tắt là Khóa học PBS) do Tổ chức Autism Spectrum (Aspect - Úc) và Trung tâm Sáng kiến Sức khỏe và Dân số (CCIHP) xây dựng và triển khai ở Việt Nam trong khuôn khổ Dự án Hòa nhập 1 do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ. Mục tiêu của khóa học là hướng dẫn cho phụ huynh/người chăm sóc trẻ những kỹ năng và chiến lược hiệu quả để hỗ trợ hành vi tích cực cho con tại nhà. Khóa học được triển khai trực tuyến Online qua các video được quay sẵn và các buổi học Zoom, kéo dài trong 10 tuần.
                Khóa học dành cho các gia đình sinh sống tại Huế, Quảng Trị và Quảng Nam trong khuôn khổ Dự án Hòa nhập 1.</p>
              <div className='btn-KhoaHoc'>
                <Link to='/'> <a href="#" class="btn btn-danger">Tìm hiểu thêm</a> </Link>
                <Link to='/'> <a href="#" class="btn btn-danger">Đăng ký ngay</a> </Link>
              </div>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default KhoaHoc;
