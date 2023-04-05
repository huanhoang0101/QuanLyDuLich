import React, { state } from 'react';
import BlogBlock from '../Components/BlogBlock';
import Row from 'react-bootstrap/Row';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import PageButton from '../Components/PageButton';

const ListBlogs = () => {
    const arrPages = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Row style={{margin:"0px"}}>
                <BlogBlock/>
            </Row>
            <Row style={{margin:"0px"}}>
                <BlogBlock/>
            </Row>
            <Row style={{margin:"0px"}}>
                <BlogBlock/>
            </Row>
            <Row style={{margin:"0px"}}>
                <BlogBlock/>
            </Row>
            <Row style={{margin:"0px"}}>
                <BlogBlock/>
            </Row>
            <div style={{margin: "20px", display:"flex", justifyContent:"space-between"}}>
                <PreviousButton/>
                <div style={{width:"500px", justifyContent:"space-around", display:"flex"}}>
                    {arrPages.map(function(element) {
                        return (
                            <PageButton page={element}/>
                        );
                    })}
                </div>
                <NextButton/>
            </div>
        </>
    );

};

export default ListBlogs;
