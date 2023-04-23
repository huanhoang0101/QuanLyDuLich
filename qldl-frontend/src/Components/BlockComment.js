import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import slide1 from '../image/slide/slide1.jpg';
import { Col, Row } from 'react-bootstrap';

function CommentBlock() {
  return (
    <Row style={{borderTop: "1px solid black", paddingTop:"15px", paddingBottom:"15px", marginTop:"5px"}}>
        <Col xs={1}>
            <img src={slide1} width="65px" height="65px" style={{marginTop: "15px"}}/>
        </Col>
        <Col xs={11} style={{marginTop: "10px"}}>
            <Row>
                <span>Lý Quốc Hùng</span>
            </Row>
            <Row>
                <span>12/12/2024</span>
            </Row>
            <Row style={{marginTop:"10px", lineHeight:"2"}}>
                <span>Chuyến đi hay nhức đít,Chuyến đi hay nhức đít,Chuyến đi hay nhức đít,Chuyến đi hay nhức đít,Chuyến đi hay nhức đít Chuyến đi hay nhức đít,Chuyến đi hay nhức đít,Chuyến đi hay nhức đít,Chuyến đi hay nhức đít,Chuyến đi hay nhức đít</span>
            </Row>
        </Col>
    </Row>
  );
}

export default CommentBlock;