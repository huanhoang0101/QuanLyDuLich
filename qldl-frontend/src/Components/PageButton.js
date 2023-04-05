import React, { state } from 'react';
import '../css/paginate.css';
import Button from 'react-bootstrap/Button';

const PageButton = (props) => {
  return (
    <>
        <Button variant="outline-dark" className='btn-paginate' style={{paddingLeft:"20px", paddingRight: "20px"}}>{props.page}</Button>
    </>
  );

};

export default PageButton;
