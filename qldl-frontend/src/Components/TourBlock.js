import React, { state } from 'react';
import img from '../image/slide/slide1.jpg'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  Link
} from 'react-router-dom';
import '../css/tour.css'

const Tour = () => {


  return (
    <>
        <Card style={{ width: '17.5rem' }} className="tour-card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <Link style={{color:"black", textDecoration:"none"}} to="/tour/1">
                Du lịch Hè - Tour Phú Quốc - Grand World - Vinwonders từ Sài Gòn 2023
              </Link>
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>Giá người lớn : 2.400.000 vnđ</ListGroup.Item>
              <ListGroup.Item>Giá trẻ em : 1.500.000 vnđ</ListGroup.Item>
              <ListGroup.Item>3 ngày 2 đêm</ListGroup.Item>
              <ListGroup.Item>Số người : 15</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
    </>
  );

};

export default Tour;
