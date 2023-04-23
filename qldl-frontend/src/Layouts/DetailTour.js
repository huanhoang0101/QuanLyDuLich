import React, { useState, useEffect } from 'react';
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
import { useParams } from 'react-router-dom';
import API, { authAPI, endpoints } from "../configs/API"
import Loading from "../Components/Loading"
import HTMLContent from '../Plugins/HtmlContent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const DetailTour = () => {

  const [orderForm, setOrderForm] = React.useState(false);
  const [key, setKey] = useState('description');
  const { tourId } = useParams();
  const arrPages = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  const arrCommments = [1, 2, 3, 4, 5];
  const [tour, setTour] = useState(null)
  const [tourImage, setTourImage] = useState(null)
  const [comment, setComment] = useState('');
  const MySwal = withReactContent(Swal)

  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  useEffect(() => {
    const loadTour= async () => {
        try {
            let e = `${endpoints['tour']}${tourId}`
            // navigate(`/posts/?page=${page}`)
            let res = await API.get(e)
            console.log(res);
            setTour(res.data)
        } catch (ex) {
        }
    }
    const TourImage= async () => {
      try {
          let e = `${endpoints['tour']}${tourId}/image/`
          // navigate(`/posts/?page=${page}`)
          let res = await API.get(e)
          console.log(res);
          setTourImage(res.data)
          console.log(res.data[0]);
      } catch (ex) {
      }
  }
    setTour(null)
    setTimeout(function() {
      loadTour()
      TourImage()
        return;
    }, 500);
  }, [])

  const sendComment = (event) => {
    event.preventDefault();
    const process = async () => {
      try {
          let e = `${endpoints['tour']}${tourId}/comments/`
          // navigate(`/posts/?page=${page}`)
          let res = await authAPI().post(e, {
            "content": comment,
          })
          setComment('');
          MySwal.fire(
            'Success',
            'Send Comment Successfully?',
            'success'
          )

      } catch (ex) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      } finally {
      }
    }
    if(comment != ""){
      process();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Comment is empty!',
      })
    }
    
  }

  if (tour === null)
    return <Loading />

  return (
    <>
      <img style={{marginTop:"30px"}} src={slide2} width="100%" height="600px"/>
      <h2 style={{textAlign:"center", margin:"20px", borderBottom: "1px solid gray", padding:"20px"}}>
        {tour.name}
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
          <DetailTourBlock value={"Nơi tham quan : " + `${tour.location.name}`}/>
          <DetailTourBlock value={"Thời gian : " + `${tour.duration}` +" ngày"}/>
          <DetailTourBlock value={"Giá người lớn : " + formatCurrency(parseInt(parseInt(tour.adult_price)))}/>
          <DetailTourBlock value={"Giá trẻ em : " + formatCurrency(parseInt(parseInt(tour.children_price)))}/>
          <DetailTourBlock value={"Số người tối đa : " + `${tour.max_person}` +" người"}/>
        </Col>
        <Col xs={8}>
          <Row>
            {tourImage.map(function(element) {
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
                <HTMLContent html={tour.description} />
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
            <CommentForm sendComment={sendComment} comment={comment} setComment={setComment}/>
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
