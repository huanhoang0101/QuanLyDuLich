import React, { useState, useEffect } from 'react';
import BlogBlock from '../Components/BlogBlock';
import Row from 'react-bootstrap/Row';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import API, { endpoints } from "../configs/API"
import { useSearchParams, useNavigate } from "react-router-dom"
import Loading from "../Components/Loading"

const ListBlogs = () => {
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
                let e = `${endpoints['posts']}?page=${page}`
                navigate(`/posts/?page=${page}`)
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
        return <div className="alert alert-info m-1">KHÔNG có khóa học nào!!!</div>

    return (
        <>
            {tours.map(function(element) {
                return (
                    <Row style={{margin:"0px"}}>
                        <BlogBlock post={element}/>
                    </Row>
                );
            })}

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

export default ListBlogs;
