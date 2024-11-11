import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './HuongDanCanThiep.css'

const HuongDanCanThiep = () => {
  return (
    <div className='p-3 bg-light rounded shadow'>
      <div className='au-video'>
        <div className='au-video-item'>

        </div>
      </div>
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 2 }}
        >
          <Box className="card" >
            <div className="card-body item1">
              <div className='card-danhsach'>
                <div className='new-header-card'>
                  <h5 className="card-title">  I. TÌM HIỂU TRẺ ĐỂ XÂY DỰNG KẾ HOẠCH CAN THIỆP  </h5>
                </div>
                <div className='card-body-new'>
                  <p className="card-text"> Giới thiệu các thông tin về sự phát triển thông thường của trẻ và những khó khăn ở trẻ có nhu cầu đặc biệt, kèm theo các hướng dẫn đặt mục tiêu can thiệp toàn diện để cha mẹ can thiệp cho trẻ tại gia đình						 </p>
                </div>
              </div>
              <div className='btn-XemChiTiet'>
                <Link to='/'> <a href="#" className="btn btn-danger">Xem chi tiết</a> </Link>
              </div>
            </div>
          </Box>
          <Box className="card item2">
            <div className="card-body">
              <div className='card-danhsach'>
                <div className='new-header-card'>
                  <h5 className="card-title">  II. THỰC HÀNH CÁC CHIẾN LƯỢC CAN THIỆP HIỆU QUẢ </h5>
                </div>
                <div className='card-body-new'>
                  <p className="card-text"> Hướng dẫn các chiến lược, hay cách cha mẹ dạy trẻ trong bất kỳ hoạt động nào như phát triển nhận thức, giao tiếp, chơi đùa, tự chăm sóc bản thân, v.v. Bên cạnh đó, là hướng dẫn các cha mẹ hỗ trợ trong các tình huống trẻ khó khăn về xử lý cảm giác của trẻ. Các chiến lược này rất quan trọng để cha mẹ dạy trẻ hiệu quả, nên cần được thực hành mọi lúc, mọi nơi </p>
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
                  <h5 className="card-title"> III. GỢI Ý CÁC HOẠT ĐỘNG CAN THIỆP </h5>
                </div>
                <div className='card-body-new'>
                  <p className="card-text"> Hướng dẫn bằng video cách dạy trẻ các hoạt động từ mức dễ tới khó trong 8 lĩnh vực: học tập, chơi đùa, giao tiếp, vận động và thể thao, tự chăm sóc bản thân và làm việc nhà, hiểu cảm xúc và điều tiết hành vi, tham gia hoạt động cộng đồng, xây dựng các mối quan hệ.					 </p>
                </div>
              </div>
              <div className='btn-XemChiTiet'>
                <Link to='/' className="btn btn-danger">Xem chi tiết </Link>
              </div>
            </div>
          </Box>
        </Stack>
      </div>
      <div>
        <h1>Ví dụ một số video can thiệp mẫu trên A365</h1>
        <p>
          A365 dự kiến sẽ xây dựng một kho dữ liệu với gần 300 video mẫu để hỗ trợ phụ huynh/giáo viên trong quá trình can thiệp cho trẻ. Hiện nay, có hơn 120 video đã được xây dựng hoàn thiện và đăng tải trong phần HƯỚNG DẪN CAN THIỆP. Dưới đây là ví dụ về một số video can thiệp trên A365. Để xem được hết các video can thiệp trên A365, bạn cần đăng ký tài khoản. Đăng ký tài khoản ngay.
        </p>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 2 }}
        >
          <Box className="huongdan">
            <div className="video-huongdan">
            </div>
            <div>
            <Link to='/'>Dạy trẻ hiểu và làm theo yêu cầu cơ bản</Link>
            </div>

          </Box>
          <Box className="huongdan">
            <div className="video-huongdan">
            </div>
            <div>
            <Link to='/HuongDanCanThiep/DayTreTapTrungMucCao'>Dạy trẻ tập trung mức cao</Link>
            </div>
          </Box>
          <Box className="huongdan">
            <div className="video-huongdan">
            </div>
            <div>
            <Link to='/'>Dạy trẻ giải quyết tình huống đơn giản</Link>
            </div>
          </Box>
          <Box className="huongdan">
            <div className="video-huongdan">
            </div>
            <div>
            <Link to='/HuongDanCanThiep/DayTreChoiGiaVo'>Dạy trẻ chơi giả vờ (phần 2)</Link>
            </div>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default HuongDanCanThiep;
