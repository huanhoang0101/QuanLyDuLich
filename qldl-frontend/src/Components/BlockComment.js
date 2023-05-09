import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import slide1 from '../image/slide/slide1.jpg';
import { Col, Row } from 'react-bootstrap';

function CommentBlock(props) {
    console.log(props.value.user );
    return (
    <Row style={{borderTop: "1px solid black", paddingTop:"15px", paddingBottom:"15px", marginTop:"5px"}}>
        <Col xs={1}>
            <img src={slide1} width="65px" height="65px" style={{marginTop: "15px"}}/>
        </Col>
        <Col xs={11} style={{marginTop: "10px"}}>
            <Row>
                <strong>{props.value.user.first_name} {props.value.user.last_name}</strong>
            </Row>
            <Row>
                <span>{props.value.created_date}</span>
            </Row>
            <Row style={{marginTop:"10px", lineHeight:"2"}}>
                <span>{props.value.content}</span>
            </Row>
        </Col>
    </Row>
  );
}

export default CommentBlock;