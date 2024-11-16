import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Không tìm thấy bài báo hay đường dẫn đã chọn</p>
      <Link to="/" class="btn btn-primary">Trở về trang chủ</Link>
    </div>
  );
};

export default PageNotFound;
