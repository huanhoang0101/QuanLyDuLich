import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import DetailTourBlock from '../Components/DetailTourBlock';
import slide2 from '../image/slide/slide2.png'
import TourImage from '../Components/TourImage';
import Form from 'react-bootstrap/Form';
import CommentForm from '../Components/Comment';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import CommentBlock from '../Components/BlockComment';
import OrderTourForm from '../Components/OrderTourForm';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Rating from 'react-rating';

const DetailTour = () => {

  const [orderForm, setOrderForm] = React.useState(false);
  const [key, setKey] = useState('description');

  const arrPages = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  const arrCommments = [1, 2, 3, 4, 5];
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
                <Button variant="dark"  onClick={() => setOrderForm(true)} type="button" style={{width:"100%", borderRadius:"0px"}}>
                  Register
                </Button>
                <OrderTourForm
                  show={orderForm}
                  onHide={() => setOrderForm(false)}
                />
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
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{marginTop:"20px", paddingTop:"20px", borderTop: "1px solid gray"}}
      >
        <Tab eventKey="description" title="Description">
          <Row>
            <Col xs={12}>
              <p style={{fontSize: "19px", margin:"20px", paddingBottom:"20px"}}>
                With certain React-Bootstrap components, you may want to modify the component or HTML tag that is rendered.
                If you want to keep all the styling of a particular React-Bootstrap component but switch the component that is finally rendered (whether it's a different React-Bootstrap component, a different custom component, or a different HTML tag) you can use the as prop to do so.
                The example below passes an anchor to the as prop in a Button component. This ultimately causes a a tag to be rendered but with the same styles as a Button component
              </p>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="action" title="Action">
          <Row style={{ padding:"30px", height:"250px"}}>
            <Col xs={8}>
              <Row style={{marginLeft: "10px", width: "300px"}}>
                <Col>
                    <strong>
                      Lượt thích : 
                    </strong>
                </Col>
                <Col>
                  <span>
                    1 tỉ
                  </span>
                </Col>
              </Row>
              <Row  style={{marginLeft: "10px", width: "300px", marginTop:"25px"}}>
                <Col>
                  <strong>
                    Rating :
                  </strong>
                </Col>
                <Col>
                  <span style={{fontSize:"35px"}}>
                    3.5/5
                  </span>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <p><strong>Choose Rating</strong></p>
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="comment" title="Comment">
          <Row style={{ margin:"20px", padding:"10px"}}>
            <CommentForm/>
          </Row>
        </Tab>
        <Tab eventKey="list-comments" title="List Comments">
          <Row style={{ margin:"20px", padding:"10px"}}>
            {arrCommments.map(function(element) {
                              return (
                                <CommentBlock/>
                              );
                })}
          </Row>
          <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px"}}>
            <PreviousButton/>
            <NextButton/>
          </div>
        </Tab>
      </Tabs>
    </>
  );

};

export default DetailTour;
