import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='p-3 bg-light rounded shadow'>
        <p>Đây là trang dành riêng cho cha mẹ/người chăm sóc trẻ/cán bộ y tế và giáo viên đã đăng nhập để lưu trữ thông tin về trẻ của mình. Trang có hai tính năng chính:</p>
        <ul>
            <li>Theo dõi sự phát triển toàn diện của trẻ thông qua việc lưu lại các kết quả của các bài đánh giá phát triển cho trẻ
                    . Trang cũng có tính năng nhắc đánh giá lại định kỳ để bố mẹ có thể theo dõi sự phát triển của con tốt nhất.</li>
            <li>Lưu trữ các hoạt động can thiệp mà gia đình đã và đang thực hiện trong trường hợp trẻ gặp khó khăn về phát triển và cần can thiệp
                    , kèm theo bài đánh giá hiệu quả can thiệp Trung tâm. Cụ thể:
            <ul>
                <li>
                Mục Nhật ký can thiệp cho phép người chăm sóc trẻ được lựa chọn 8 hoạt động ở các lĩnh vực và xem video hướng dẫn can thiệp cụ thể dựa trên các phương pháp có kiểm chứng khoa học
                . Mục này cũng lưu trữ các hoạt động trẻ đã thành thạo trong trường hợp gia đình muốn xem lại chặng đường phát triển của trẻ.
                </li>
                <li>
                Trung tâm là bảng kiểm đánh giá can thiệp tự kỷ, giúp cha mẹ và nhà chuyên môn theo dõi sự thay đổi toàn diện 
                của trẻ trong quá trình can thiệp. Bộ bảng kiểm này gồm có 77 câu hỏi, giúp đánh giá trẻ ở 4 lĩnh vực khác nhau: giao tiếp/ngôn ngữ, kỹ năng xã hội, nhận thức, sức khỏe/thể chất/hành vi. Bạn nên làm bài đánh giá này trước khi can thiệp và ít nhất cứ mỗi 3-6 tháng để có cái nhìn tổng thể về tình trạng của trẻ và hỗ trợ việc đặt mục tiêu và chọn bài học trong can thiệp cho trẻ tại nhà.
                </li>
            </ul>
            </li>
            
        </ul>
    </div>
  );
};

export default Home;
