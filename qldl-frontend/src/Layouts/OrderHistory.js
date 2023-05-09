import React, { useState, useEffect } from 'react';
import {Button, Col, Row } from 'react-bootstrap';
import Menu from '../Components/ProfileMenu';
import Form from 'react-bootstrap/Form';
import slide2 from '../image/slide/slide2.png'
import OrderBlock from '../Components/OrderBlock';
import API, { authAPI, endpoints } from "../configs/API"
import Loading from "../Components/Loading"
import HTMLContent from '../Plugins/HtmlContent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';

const OrderHistory = () => {
    const [orders, setOrders] = useState(null)
    const [page, setPage] = useState(1)
    const [checkNextPage, setCheckNextPage] = useState(2);
    const [checkPrevPage, setCheckPrevPage] = useState(null);
    const nextPage = () => setPage(current => current + 1)
    const prevPage = () => setPage(current => current - 1)
    useEffect(() => {
        const loadOrders= async () => {
            try {
                window.scrollTo(0, 0);
                let e = `${endpoints['tour-order']}?page=${page}`
                // navigate(`/posts/?page=${page}`)
                let res = await authAPI().get(e)
                console.log(res.data.results);
                setOrders(res.data.results)
                setCheckNextPage(res.data.next);
                setCheckPrevPage(res.data.previous);
            } catch (ex) {
            }
        }
        setOrders(null) 
        setTimeout(function() {
            loadOrders();
            return;
        }, 500);
    }, [page])

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <Menu/>
                </Col>
                <Col xs={8} style={{marginTop: "20px"}}>
                    {
                        orders ? (
                            orders.map(function(element) {
                                return (
                                    <Col>
                                        <OrderBlock order={element}/>
                                    </Col>
                                );
                            })
                        ) : (
                            <Loading />                        )
                    }
                    <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px"}}>
                        {checkPrevPage ? (
                                <PreviousButton prevPage={prevPage}/>
                            ) : (
                            <div>
                            </div>
                        )}
                        {checkNextPage ? (
                            <NextButton nextPage={nextPage}/>
                        ) : (
                            <div>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    ); 
};

export default OrderHistory;
