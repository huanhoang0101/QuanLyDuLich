import React, { state } from 'react';
import '../css/paginate.css';
import Button from 'react-bootstrap/Button';

const NextButton = (props) => {


  return (
    <>
        <Button onClick={props.nextPage} variant="outline-dark" className='btn-paginate' style={{float:"right"}}>Next Page</Button>
    </>
  );

};

export default NextButton;
