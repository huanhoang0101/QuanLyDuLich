import React, { state } from 'react';
import img from '../image/slide/slide1.jpg'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  Link
} from 'react-router-dom';
import '../css/tour.css'

const Tour = (props) => {
  const tourId = "/tour/"+props.tour.id;
  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  console.log(props.tour);
  return (
    <>
        <Card style={{ width: '17.5rem' }} className="tour-card">
          <Card.Img variant="top" src={props.tour.image} />
          <Card.Body>
            <Card.Title>
              <Link style={{color:"black", textDecoration:"none"}} to={tourId}>
                {props.tour.name}
              </Link>
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>Giá người lớn : {formatCurrency(props.tour.adult_price)}</ListGroup.Item>
              <ListGroup.Item>Giá trẻ em : {formatCurrency(props.tour.children_price)}</ListGroup.Item>
              <ListGroup.Item>So Ngay : {props.tour.duration}</ListGroup.Item>
              <ListGroup.Item>Số người : {props.tour.max_person}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
    </>
  );

};

export default Tour;
