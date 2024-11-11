import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Grid2 from '@mui/material/Grid2';
import { Box, Stack } from '@mui/material';
import './TheoDoiVaSangLocPhatTrienChoTre.css'
const TheoDoiVaSangLocPhatTrienChoTre = () => {
  return (
    <div>
      <h1>Kiến thức</h1>
      <h4>Chủ đề: THEO DÕI VÀ SÀNG LỌC PHÁT TRIỂN CHO TRẺ</h4>
      <Accordion className='danhsach-item'>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          1.Sàng lọc phát triển cho trẻ(1 bài)
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Grid2 container spacing={3}>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
            </Grid2>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className='danhsach-item'>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          2 . Phát triển kỹ năng cho trẻ(8 bài)
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Grid2 container spacing={3}>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
            </Grid2>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className='danhsach-item'>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          2. Bộ công cụ theo dõi sự phát triển của trẻ ASQ-3(2 bài)
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Grid2 container spacing={3}>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
            </Grid2>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className='danhsach-item'>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          3 . Bộ công cụ sàng lọc nguy cơ tự kỷ M-CHAR-R (2 bài)
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Grid2 container spacing={3}>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
              <Grid2 size={6}>
              <Stack direction="row" spacing={2}>
                  <Box>
                    <div className='img-item'>
                      <img></img>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <h5>Lúc trẻ 6 tháng tuổi</h5>
                      <p>Trẻ có thể ngồi vững, có phản xạ khi được gọi tên và bắt đầu nhận biết người lạ?</p>
                      <div className='btn-KhoaHoc'>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </Grid2>
            </Grid2>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TheoDoiVaSangLocPhatTrienChoTre;
