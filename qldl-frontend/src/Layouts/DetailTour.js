import React, { state } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import DetailTourBlock from '../Components/DetailTourBlock';
import TourBlock from '../Components/TourBlock';
import slide2 from '../image/slide/slide2.png'
import slide1 from '../image/slide/slide1.jpg'
import TourImage from '../Components/TourImage';
import Form from 'react-bootstrap/Form';

const DetailTour = () => {
  const arrPages = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  return (
    <>
      <img style={{marginTop:"30px"}} src={slide2} width="100%" height="600px"/>
      <h2 style={{textAlign:"center", margin:"20px", borderBottom: "1px solid gray", padding:"20px"}}>
        TOUR DALAT 1 THÁNG SIÊU VIP PRO, THUNG LŨNG TÌNH DỤC , LĂNG ĐI ANH, HỒ XUÂN LƯƠNG
      </h2>
      <Row>
        <Col xs={4}>
          <Row style={{borderBottom: "1px solid gray", paddingBottom: "20px", margin:"20px", marginTop:"10px", marginBottom:"10px"}}>
            <Col xs={6}>
              <div style={{width:"150px", margin:"auto"}}>
                <Button variant="dark" type="button" style={{width:"100%", borderRadius:"0px"}}>
                  Register
                </Button>
              </div>
            </Col>
            <Col xs={6}>
              <div style={{height:"100%",width:"100%",textAlign:"center"}}>
                <label style={{height:"100%",lineHeight:"2.2", fontWeight:"600"}}>Liên Hệ : 091123342</label>
              </div>
            </Col>
          </Row>
          <DetailTourBlock value={"Nơi tham quan : Đà Lạt, Lâm Đồng"}/>
          <DetailTourBlock value={"Thời gian : 30 ngày"}/>
          <DetailTourBlock value={"Giá người lớn : 50.000.000 vnđ"}/>
          <DetailTourBlock value={"Giá trẻ em,: 20.000.000 vnđ"}/>
          <DetailTourBlock value={"Số người tối đa : 20 người"}/>
        </Col>
        <Col xs={8}>
          <Row>
            {arrPages.map(function(element) {
                          return (
                            <Col xs={4}>
                              <TourImage image={slide2}/>
                            </Col>
                          );
            })}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p style={{fontSize: "19px", margin:"20px", borderTop: "1px solid gray", borderBottom:"1px solid gray", padding:"30px"}}>
            With certain React-Bootstrap components, you may want to modify the component or HTML tag that is rendered.
            If you want to keep all the styling of a particular React-Bootstrap component but switch the component that is finally rendered (whether it's a different React-Bootstrap component, a different custom component, or a different HTML tag) you can use the as prop to do so.
            The example below passes an anchor to the as prop in a Button component. This ultimately causes a a tag to be rendered but with the same styles as a Button component
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <Row>
            <span>
              Lượt thích : 
            </span>
            <span>
              1 tỉ
            </span>
          </Row>
          <Row>
            <span>
              Rating :
            </span>
            <span>
              3.5/5
            </span>
          </Row>
        </Col>
        <Col xs={4}>
          <p><strong>Choose Rating</strong></p>
          <Form>
            <Form.Group className="mb-3" controlId="ratting">
              <Form.Select >
                  <option>1 Sao</option>
                  <option>2 Sao</option>
                  <option>3 Sao</option>
                  <option>4 Sao</option>
                  <option>5 Sao</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );

};

export default DetailTour;
