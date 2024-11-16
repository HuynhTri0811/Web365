import React from 'react';
import './DayTreTapTrungMucCao.css'
import Anh9 from '../../assets/Anh9.jpg'

const DayTreTapTrungMucCao = () => {
  return (
    <div className='p-3 bg-light rounded shadow'>
      <h2>DẠY TRẺ HIỂU VÀ LÀM THEO YÊU CẦU CƠ BẢN</h2>
      <p>Ngày cập nhật :08/08/2021</p>
      <div>
      <div className='au-video'>
        <div className="au-video-item">
          <img src={Anh9} style={{width:"100%",height:"100%"}} ></img>
        </div>
      </div>
      <div>
            <p style={{color:'red'}}>
            Giới thiệu:
            </p>
            <p>
            Làm theo hướng dẫn là một kỹ năng quan trọng mà trẻ cần học trong cuộc sống. Trẻ cần phải học để làm theo hướng dẫn của cha mẹ khi tự chăm sóc cá nhân, và ở lớp thì trẻ cần theo sự chỉ dẫn của thầy cô. Trẻ tự kỷ sẽ gặp khó khăn khi tập trung chú ý một chỉ dẫn bằng lời, đặc biệt nếu đó là nhiệm vụ trẻ không thích. Điều này dẫn đến nhiều vấn đề về hành vi hay các cơn bùng nổ ở lớp học cũng như ở nhà.
            </p>
            <p style={{color:'red'}}>
            Làm thế nào để dạy trẻ làm theo hướng dẫn:
            </p>
            <p>
            Bước 1: Cần làm mọi cách để trẻ chú ý lắng nghe
            <ul>
                <li>Nếu trẻ đang tham gia một hoạt động khác làm trẻ hứng thú hơn, hãy dừng hoạt động đó lại để trẻ hoàn toàn chú ý vào cha mẹ.</li>
                <li>Ban đầu cha mẹ không nên đưa hướng dẫn khi đứng ở xa trẻ. Việc đáp lại với các chỉ dẫn từ xa là một kỹ năng ở mức độ khó hơn và cần được hướng dẫn dần dần. Cha mẹ nên hướng dẫn ngay bên cạnh trẻ trước.</li>
            </ul>
            </p>
            <p>
            Bước 2: Khuyến khích trẻ
            <ul>
                <li>Chuẩn bị một số “phần thưởng” khi trẻ làm theo chỉ dẫn của bạn, có thể là những thứ trẻ thích và các cử chỉ hoặc lời khen ngợi (ôm, đập tay,v.v).</li>
            </ul>
            </p>
            <p>
            Bước 3: Chia nhỏ chỉ dẫn thành các bước
            <ul>
                <li>Nếu bạn đưa ra hướng dẫn chung (ví dụ: mặc quần áo vào) trẻ sẽ dễ cảm thấy đây là một việc khó khăn và sẽ không hoàn thành hết các bước.</li>
                <li>Chia hoạt động thành các bước nhỏ hơn, vì dụ “lấy áo, cho một tay vào trước, cho tay còn lại vào, chui đầu qua cổ áo, kéo áo xuống).</li>
            </ul>
            </p>
            <p>
            Bước 4: Sử dụng kỹ thuật Tăng dần sự hỗ trợ cho trẻ trong khi đưa ra chỉ dẫn
            <ul>
                <li>Khi bắt đầu, gợi ý bằng lời cho trẻ, ví dụ: Đưa cho mẹ cái áo.</li>
                <li>Nếu trẻ không trả lời ngay, kết hợp gợi ý bằng lời với một cử chỉ, ví dụ chỉ về phía đồ vật bạn đang yêu cầu trẻ lấy và nói: Lấy cho mẹ cái áo.</li>
                <li>Nếu trẻ vẫn không phản ứng, trực tiếp giúp trẻ hoàn thành hiệu lệnh (cầm tay trẻ để lấy đồ vật).</li>
                <li>Bố mẹ nên thử lặp lại yêu cầu một lần nữa để xem trẻ có phản ứng nhanh hơn không.</li>
            </ul>
            </p>
            <p>
            Nguồn : Tarbox RSF, Wallace MD, Penrod B, Tarbox J. Effects of Three-Step Prompting on Compliance with Caregiver Requests. J Appl Behav Anal. 2007 Winter; 40(4): 703–706.
            </p>
      </div>
      </div>

    </div>
  );
};

export default DayTreTapTrungMucCao;
