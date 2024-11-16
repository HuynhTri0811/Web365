import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NguyenTuanAnh from '../../assets/NguyenTuanAnh.jpg';
import NguyenKiemHaBien from '../../assets/NguyenKiemHaBien.jpg';
import NguyenThiMaiLinh from '../../assets/NguyenThiMaiLinh.jpg';
import NguyenThiHuyen from '../../assets/NguyenThiHuyen.jpg';
import './About.css'
const About = () => {
  return (
    <div className='p-3 bg-light rounded shadow'>
      <div className='ThongTinCoBan'>
        <h4>Giới thiệu Đội ngũ</h4>
        <p>Chúng tôi tự hào là một đội ngũ đa ngành gồm các chuyên gia và sinh viên năng động, tâm huyết, có kiến thức sâu rộng trong lĩnh vực giáo dục đặc biệt và quản lý giáo dục. Đội ngũ của chúng tôi bao gồm:</p>
        <ul>
          <li><i>Chuyên gia giáo dục đặc biệt</i>: Các giảng viên và tiến sĩ đầu ngành với nhiều năm kinh nghiệm trong việc nghiên cứu, giảng dạy và phát triển các phương pháp giáo dục cho trẻ có nhu cầu đặc biệt
            . Họ không chỉ đóng vai trò cố vấn mà còn trực tiếp tham gia xây dựng nội dung, khóa học chuyên sâu, mang lại giá trị thực tế và hữu ích cho người dùng.</li>
          <li><i>Nhóm sinh viên tài năng:</i> Sinh viên từ các ngành Giáo dục Đặc biệt và Quản lý Giáo dục có kiến thức nền tảng vững chắc, đã tham gia thực tập và làm việc tại các trung tâm can thiệp sớm và trường học hòa nhập
            . Họ là những người năng động, sáng tạo và có khả năng áp dụng kiến thức vào thực tế, đồng thời hiểu rõ tâm lý và nhu cầu của trẻ đặc biệt.</li>
          <li>
            <i>Đội ngũ hỗ trợ kỹ thuật:</i> Bao gồm các chuyên viên thiết kế, phát triển giao diện trang web với sự thân thiện và dễ sử dụng. Đội ngũ kỹ thuật luôn sẵn sàng cải tiến, đảm bảo trải nghiệm người dùng mượt mà và an toàn.
          </li>
          <li>
            <i>Nhóm truyền thông</i>: Đảm nhiệm việc quảng bá, kết nối với cộng đồng thông qua các kênh truyền thông số, mạng xã hội. Họ giúp lan tỏa giá trị và tầm nhìn của dự án, nâng cao nhận thức về giáo dục đặc biệt trong cộng đồng.
          </li>

        </ul>
        <p>
          Chúng tôi tin rằng, với sự kết hợp giữa kiến thức chuyên môn, kinh nghiệm thực tiễn và tinh thần sáng tạo
          , đội ngũ của chúng tôi sẽ mang đến những giải pháp giáo dục chất lượng cao
          , hỗ trợ đắc lực cho phụ huynh và giáo viên trong hành trình chăm sóc, giáo dục trẻ có nhu cầu đặc biệt.
        </p>
      </div>
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 2 }}
        >
          <Box className="card nhansu" sx={{ width: "100%" }} style={{ borderRadius: "20px 20px 20px 20px" }}>
            <div className="card-body item1">
              <div className='card-danhsach'>
                <div className='card-body-new'>
                  <img src={NguyenTuanAnh} style={{width:"100%",height:"100%"}}></img>
                  <p style={{textAlign:"center"}}> Nguyễn Tuấn Anh </p>
                </div>

              </div>
            </div>
          </Box>
          <Box className="card nhansu" sx={{ width: "100%" }} style={{ borderRadius: "20px 20px 20px 20px" }}>
            <div className="card-body item1">
              <div className='card-danhsach'>
                <div className='card-body-new'>
                  <img src={NguyenKiemHaBien} style={{width:"100%",height:"100%"}}></img>
                  <p style={{textAlign:"center"}}> Nguyễn Kim Hà Biên </p>
                </div>

              </div>
            </div>
          </Box>
          <Box className="card nhansu" sx={{ width: "100%" }} style={{ borderRadius: "20px 20px 20px 20px" }}>
            <div className="card-body item1">
              <div className='card-danhsach'>
                <div className='card-body-new'>
                  <img src={NguyenThiMaiLinh} style={{width:"100%",height:"100%"}}></img>
                  <p style={{textAlign:"center"}}> Nguyễn Thị Mai Linh </p>
                </div>

              </div>
            </div>
          </Box>
          <Box className="card nhansu" sx={{ width: "100%" }} style={{ borderRadius: "20px 20px 20px 20px" }}>
            <div className="card-body item1">
              <div className='card-danhsach'>
                <div className='card-body-new'>
                  <img src={NguyenThiHuyen} style={{width:"100%",height:"100%"}}></img>
                  <p style={{textAlign:"center"}}> Cô Hướng dẫn là TS.Nguyễn Thị Huyền </p>
                </div>

              </div>
            </div>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default About;
