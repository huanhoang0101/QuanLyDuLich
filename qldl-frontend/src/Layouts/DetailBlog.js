
import React, { useState, useEffect } from 'react';
import '../css/blog.css';
import PreviousButton from '../Components/PreviousButtonn';
import NextButton from '../Components/NextButton';
import CommentBlock from '../Components/BlockComment';
import BlockContent from '../Components/BlockContent';
import CommentForm from '../Components/Comment';
import { Button, Col, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useParams } from 'react-router-dom';
import API, { authAPI, endpoints } from "../configs/API"
import Loading from "../Components/Loading"
import HTMLContent from '../Plugins/HtmlContent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function DetailBlog() {
    const [isLike, setIsLike] = useState(false);
    const [key, setKey] = useState('comment');
    const { blogId } = useParams();
    const arrCommments = [1, 2, 3, 4, 5];
    const [numberLike, setNumberLike] = useState(0);
    const [blog, setBlog] = useState(null)
    const MySwal = withReactContent(Swal)
    const [comment, setComment] = useState('');
    useEffect(() => {
      const loadBlog= async () => {
          try {
              window.scrollTo(0, 0);
              let e = `${endpoints['post']}${blogId}`
              // navigate(`/posts/?page=${page}`)
              let res = await API.get(e)
              console.log(res);
              setBlog(res.data)
          } catch (ex) {
          }
      }
      setBlog(null)
      setTimeout(function() {
        loadBlog()
          return;
      }, 500);
    }, [])


    const sendComment = (event) => {
      event.preventDefault();
      const process = async () => {
        try {
            let e = `${endpoints['post']}${blogId}/comments/`
            // navigate(`/posts/?page=${page}`)
            let res = await authAPI().post(e, {
              "content": comment,
            })
            setComment('');
            MySwal.fire(
              'Success',
              'Send Comment Successfully?',
              'success'
            )
  
        } catch (ex) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        } finally {
        }
      }
      if(comment != ""){
        process();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Comment is empty!',
        })
      }
      
    }

    const changeLike = (event) => {
      event.preventDefault();
      const process = async () => {
        try {
            let e = `${endpoints['post']}${blogId}/like/`
            let res = await authAPI().post(e)
            MySwal.fire(
              'Success',
              'Like Post Successfully?',
              'success'
            )
  
        } catch (ex) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        } finally {
        }
      }
      process();
    }
    function handleClick(e) {
      changeLike(e);
      setNumberLike(numberLike + (numberLike?-1:1));
      setIsLike(!isLike);
    }

    if (blog === null)
        return <Loading />

    return (
        <>
            <div style={{marginTop:"20px", marginBottom: "20px", borderBottom: "1px solid gray", paddingBottom:"20px"}}>
                <h1 style={{textAlign: "center"}}>{blog.title}</h1>
            </div>
            <div style={{lineHeight:"2.5", borderBottom: "1px solid gray", padding:"30px"}}> 
              <HTMLContent html={blog.content} />
            </div>
            <div style={{width:"100%", marginTop:"20px", marginBottom:"20px", margin:"20px"}}>
                    <button className={ isLike ? 'active-like btn-like-custom' : 'btn-like-custom' } onClick={handleClick}>
                        <i className='like-icon far fa-thumbs-up' ></i><span style={{fontSize:"20px", fontFamily: "monospace"}}>{numberLike}</span>
                    </button>
            </div>
            <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{marginTop:"20px", paddingTop:"20px", borderTop: "1px solid gray"}}
      >
        <Tab eventKey="comment" title="Comment">
          <Row style={{ margin:"20px", padding:"10px"}}>
            <CommentForm sendComment={sendComment} comment={comment} setComment={setComment}/>
          </Row>
        </Tab>
        <Tab eventKey="list-comments" title="List Comments">
          <Row style={{ margin:"20px", padding:"10px"}}>
            {arrCommments.map(function(element) {
                              return (
                                <CommentBlock/>
                              );
                })}
          </Row>
          <div style={{margin: "20px", borderTop: "1px solid black", paddingTop: "20px"}}>
            <PreviousButton/>
            <NextButton/>
          </div>
        </Tab>
      </Tabs>
        </>
    );
}

export default DetailBlog;
