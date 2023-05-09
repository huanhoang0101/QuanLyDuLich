import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tour from '../Components/TourBlock';
import Form from 'react-bootstrap/Form';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import API, { endpoints } from "../configs/API"
import { useSearchParams, useNavigate } from "react-router-dom"
import Loading from "../Components/Loading"

const ListTour = () => {
    const navigate = useNavigate();
    const [tours, setTours] = useState(null)
    const [page, setPage] = useState(1)
    const [params] = useSearchParams()
    const [checkNextPage, setCheckNextPage] = useState(2);
    const [checkPrevPage, setCheckPrevPage] = useState(null);
    useEffect(() => {
        const loadTours= async () => {
            try {
                window.scrollTo(0, 0);
                let e = `${endpoints['tours']}?page=${page}`
                navigate(`/tours/?page=${page}`)
                let res = await API.get(e)
                setTours(res.data.results)
                setCheckNextPage(res.data.next);
                setCheckPrevPage(res.data.previous);
                console.log(tours);
            } catch (ex) {
                setPage(1)
            }
        }
        setTours(null)
        setTimeout(function() {
            loadTours()
            return;
        }, 500);
    }, [page])

    const nextPage = () => setPage(current => current + 1)
    const prevPage = () => setPage(current => current - 1)

    if (tours === null)
        return <Loading />

    if (tours.length === 0)
        return <div className="alert alert-info m-1">NO ANY TOUR!!!</div>
    return (
        <>
            <Form style={{marginTop: "20px", marginBottom: "-15px"}}>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="tourName">
                            <Form.Control type="text" placeholder="Enter Tour Name" />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Select  controlId="tourPrice">
                            <option value="0">All</option>
                            <option value="1">Dưới 5 triệu</option>
                            <option value="2">5 triệu đến 8 triệu</option>
                            <option value="3">Trên 8 triệu</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2}>
                        <Form.Select aria-label="Default select example">
                            <option>All</option>
                            <option value="1">1 - 4 người</option>
                            <option value="2">5 - 9 người</option>
                            <option value="3">10 - 15 người</option>
                            <option value="4">15 - 25 người</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2}>
                        <Form.Select aria-label="Default select example">
                            <option>All</option>
                            <option value="1">2 - 4 ngày</option>
                            <option value="2">5 - 8 ngày</option>
                            <option value="3">9 - 14 ngày</option>
                            <option value="4">15 - 30 ngày</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>
            <Row>
                {tours.map(function(element) {
                    return (
                        <Col xs={3}>
                            <Tour tour={element}/>
                        </Col>
                    );
                })}
                
            </Row>
            <div style={{margin: "20px", display:"flex", justifyContent:"space-between"}}>
            
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
        </>
    );

};

export default ListTour;
