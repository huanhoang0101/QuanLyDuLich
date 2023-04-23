import React, { state } from 'react';

const TourImage = (props) => {


  return (
    <>
        <img style={{marginTop:"15px", marginBottom:"15px"}} src={props.image} width={240} height={170}/>
    </>
  );

};

export default TourImage;
