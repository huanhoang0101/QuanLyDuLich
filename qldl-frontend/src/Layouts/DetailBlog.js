
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
    const [comments, setComments] = useState([]);
    const [numberLike, setNumberLike] = useState(0);
    const [blog, setBlog] = useState(null)
    const MySwal = withReactContent(Swal)
    const [comment, setComment] = useState('');
    const getTotalLike = async () => {
      try {
        let e = `${endpoints['post']}${blogId}/total-like/`
        let res = await API.get(e)
        console.log(res.data.number_like)
        setNumberLike(parseInt(res.data.number_like));
        console.log(numberLike)
      } catch (ex) {
      }
    }

    const getCommmentList = async () => {
      try {
        let e = `${endpoints['post']}${blogId}/comments/`
        let res = await authAPI().get(e)
        setComments(res.data);
      } catch (ex) {
      }
    }

    useEffect(() => {
      const loadBlog= async () => {
          try {
              window.scrollTo(0, 0);
              let e = `${endpoints['post']}${blogId}`
              // navigate(`/posts/?page=${page}`)
              let res = await API.get(e)
              setBlog(res.data)
          } catch (ex) {
          }
      }
      const checkHadLike = async () => {
        try {
          let e = `${endpoints['post']}${blogId}/liked/`
          // navigate(`/posts/?page=${page}`)
          let res = await authAPI().get(e)
          if(res.data.length != 0){
            setIsLike(false);
          }
          setIsLike(res.data[0].liked);
        } catch (ex) {
        }
      }
      

      setBlog(null)

      setTimeout(function() {
        loadBlog()
        checkHadLike()
        getCommmentList()
        getTotalLike()
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
            text: ex,
          })
        } finally {
        }
      }
      if(comment != ""){
        process();
        getCommmentList();
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
            if(!isLike){
              MySwal.fire(
                'Success',
                'Like Post Successfully?',
                'success'
              )
            } else {
              MySwal.fire(
                'Success',
                'UnLike Post Successfully?',
                'success'
              )
            }
            setIsLike(!isLike);
        } catch (ex) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please login before!',
          })
        } finally {
          getTotalLike();
        }
      }
      process();
    }
    function handleClick(e) {
      changeLike(e);
      // setNumberLike(numberLike + (numberLike?-1:1));
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
                  <i className='like-icon fa fa-thumbs-up' ></i>
                  <span style={{fontSize:"20px", fontFamily: "monospace"}}>{numberLike}</span>
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
            {comments.map(function(element) {
                              return (
                                <CommentBlock value={element}/>
                              );
                })}
          </Row>
        </Tab>
      </Tabs>
        </>
    );
}

export default DetailBlog;
