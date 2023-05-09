import React, { useContext, useState, useEffect} from 'react';
import API, { authAPI, endpoints } from "../configs/API"
import Loading from "../Components/Loading"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Button, Col, Row } from 'react-bootstrap';
import OrderHistoryBlock from '../Components/OrderBlockHIstory';
function Orders() {
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
    <div style={{margin:"20px"}}>
      <Tabs
      defaultActiveKey="all"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="all" title="All">
        {
            orders ? (
                orders.map(function(element) {
                    return (
                        <Col>
                            <OrderHistoryBlock order={element}/>
                        </Col>
                    );
                })
            ) : (
                <Loading />                        )
        }
        <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px", paddingBottom:"40px"}}>
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
      </Tab>
      <Tab eventKey="pending" title="Pending">
asdasdasd
        <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px", paddingBottom:"40px"}}>
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
      </Tab>
      <Tab eventKey="watting" title="Watting visit">
asdasdas
        <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px", paddingBottom:"40px"}}>
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
      </Tab>
      <Tab eventKey="processing" title="Processing">
asdasdsa
        <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px", paddingBottom:"40px"}}>
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
      </Tab>
      <Tab eventKey="completed" title="Completed">
asdasdsa
        <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px", paddingBottom:"40px"}}>
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
      </Tab>
    </Tabs>
    </div>
  );
}

export default Orders;
