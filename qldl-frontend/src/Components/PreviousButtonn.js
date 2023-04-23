import React, { state } from 'react';
import '../css/paginate.css';
import Button from 'react-bootstrap/Button';

const PreviousButton = (props) => {
  return (
    <>
        <Button onClick={props.prevPage} variant="outline-dark" className='btn-paginate' >Previous Page</Button>
    </>
  );
};

export default PreviousButton;
