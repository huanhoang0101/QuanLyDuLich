
import React from 'react';
import '../css/blog.css';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import CommentBlock from '../Components/BlockComment';
import CommentForm from '../Components/Comment';
import { Button, Col, Row } from 'react-bootstrap';


function DetailBlog() {
    const arrPages = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  return (
    <>
        <div style={{marginTop:"20px", marginBottom: "20px", borderBottom: "1px solid gray", paddingBottom:"20px"}}>
            <h1 style={{textAlign: "center"}}>
                Do it all with Mailchimp
            </h1>
        </div>
        <div style={{lineHeight:"2.5", borderBottom: "1px solid gray", padding:"30px"}}> 
            <p>
            Thay vì công bố điểm thi tốt nghiệp THPT lúc 0 giờ như các năm trước, năm nay Bộ GD-ĐT quy định rõ giờ công bố điểm thi là 8 giờ ngày 18.7.

    Những năm trước, Bộ GD-ĐT chỉ quy định ngày công bố điểm thi tốt nghiệp THPT trên cả nước, dẫn đến việc các địa phương và Bộ GD-ĐT cùng chờ đến đúng 0 giờ của ngày đó để công bố kết quả thi.
    Thí sinh không phải 'canh' điểm thi tốt nghiệp THPT lúc 0 giờ nữa? - Ảnh 1.

    Năm nay, Bộ GD-ĐT quy định rõ thời điểm công bố điểm thi tốt nghiệp THPT là 8 giờ ngày 18.7

    NGỌC THẮNG

    Trong hướng dẫn tổ chức thi tốt nghiệp THPT năm 2023, Bộ GD-ĐT quy định rõ thời điểm 8 giờ ngày 18.7 sẽ công bố kết quả thi đồng loạt trên cả nước.

    Như vậy, thời gian công bố điểm thi năm nay cũng đẩy lên sớm hơn 1 tuần do lịch thi năm nay không bị ảnh hưởng bởi dịch bệnh như năm trước (năm 2022, thí sinh biết điểm thi vào ngày 24.7).

    Liên quan tới vấn đề công bố điểm thi tốt nghiệp THPT lúc 0 giờ vào những năm trước, trao đổi với Thanh Niên, nhiều chuyên gia phân tích: từ phía thí sinh, về mặt tâm lý lẫn sức khỏe đều cho thấy không nên công bố vào lúc 0 giờ.

    Ngoài phiền toái phải chờ đợi vào khung thời gian bất bình thường, thí sinh sẽ đối diện với vấn đề tâm lý nhiều hơn.

    Đó là chưa kể, nếu kết quả không như ý, bản thân thí sinh hoặc cha mẹ, con cái phải đối diện cả một đêm dài với nhiều bất an, trăn trở, xung đột, gây ảnh hưởng rất lớn đến tâm lý. 
            </p>
        </div>
        <div style={{width:"100%", marginTop:"20px", marginBottom:"20px", margin:"20px"}}>
            <div >
                <div style={{marginBottom:"10px"}}>
                    <i className='like-icon far fa-thumbs-up' ></i><span style={{fontSize:"20px", fontFamily: "monospace"}}>1000</span>
                </div>
                <div>
                    <i className='unlike-icon far fa-thumbs-down'></i><span style={{fontSize:"20px", fontFamily: "monospace"}}>1000</span>
                </div>
            </div>
        </div>
        <Row style={{ margin:"20px", borderTop: "1px solid gray", padding:"10px"}}>
        <CommentForm/>
        {arrPages.map(function(element) {
                          return (
                            <CommentBlock/>
                          );
            })}
      </Row>
      <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px"}}>
      <PreviousButton/>
      <NextButton/>
      </div>
    </>
  );
}

export default DetailBlog;
