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
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

const DetailTour = () => {
  const [show, setShow] = useState(false);
  const [orderForm, setOrderForm] = React.useState(false);
  const [key, setKey] = useState('description');
  const { tourId } = useParams();
  const [tour, setTour] = useState(null)
  const [ratingValue, setRatingValue] = useState(0)
  const [AVGRating, setAVGRating] = useState(0)
  const [tourImage, setTourImage] = useState(null)
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const MySwal = withReactContent(Swal)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getRating = async () => {
    try {
      let e = `${endpoints['tour']}${tourId}/get-rating/`
      let res = await authAPI().get(e)
      setRatingValue(res.data[0].value);
    } catch (ex) {
    }
  }
  const getCommmentList = async () => {
    try {
      let e = `${endpoints['tour']}${tourId}/comments/`
      let res = await authAPI().get(e)
      setComments(res.data);
    } catch (ex) {
    }
  }
  const getAVGRating = async () => {
    try {
      let e = `${endpoints['tour']}${tourId}/average-rating/`
      let res = await API.get(e)
      setAVGRating(res.data.number_rate);
    } catch (ex) {
    }
  }

  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  useEffect(() => {
    const loadTour= async () => {
        try {
            let e = `${endpoints['tour']}${tourId}`
            let res = await API.get(e)
            console.log(res);
            setTour(res.data)
        } catch (ex) {
        }
    }
    const TourImage= async () => {
      try {
          let e = `${endpoints['tour']}${tourId}/image/`
          let res = await API.get(e)
          setTourImage(res.data)
      } catch (ex) {
      }
  }
    setTour(null)
    setTimeout(function() {
      loadTour()
      TourImage()
      getRating()
      getAVGRating()
      getCommmentList()
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
          text: 'Please login before!',
        })
      } finally {
      }
    }
    if(comment != ""){
      process();
      getCommmentList();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Comment is empty!',
      })
    }
    
  }

  const changeRating = (value) => {
    console.log(value)
    const process = async () => {
      try {
          let e = `${endpoints['tour']}${tourId}/rating/`
          let res = await authAPI().post(e,{
            "rate": value
          })
          setRatingValue(value)
          MySwal.fire(
            'Success',
            'Set Rating Successful',
            'success'
          )
      } catch (ex) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please login before!',
        })
      } finally {
      }
    }
    process();
  }

  if (tour === null)
    return <Loading />

  return (
    <>
      <img style={{marginTop:"30px"}} src={tour.image} width="100%" height="600px"/>
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
                  tour={tour}
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
          <Row >
            <Button style={{width: "400px", margin:"auto"}} variant="dark" onClick={() => setShow(true)}>
              See All Image
            </Button>
          </Row>
          <Row>
            {tourImage.map(function(element) {
              return (
                <Col xs={4}>
                  <TourImage image={element.image}/>
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
              <Row  style={{marginLeft: "10px", width: "300px", marginTop:"25px"}}>
                <Col>
                  <strong>
                    Rating :
                  </strong>
                </Col>
                <Col>
                  <span style={{fontSize:"35px"}}>
                    {AVGRating}/5
                  </span>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <p><strong>Choose Rating</strong></p>
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initialRating = {ratingValue}
                onChange={(value) => changeRating(value)}
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
            {comments.map(function(element) {
                              return (
                                <CommentBlock value={element}/>
                              );
                })}
          </Row>
        </Tab>
      </Tabs>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size='xl'
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Detail Images of Tour
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {tourImage.map(function(element) {
              return (
                // <Col xs={4}>
                //   <TourImage image={element.image}/>
                // </Col>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={element.image}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );

};

export default DetailTour;
