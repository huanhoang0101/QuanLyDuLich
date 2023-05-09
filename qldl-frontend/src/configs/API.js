import axios from "axios";
import cookie from "react-cookies";

export const endpoints = {
    // "categories": "/categories/",
    "tour": "/tour/",
    "post": "/post/",
    "posts": "/posts/",
    "posts-new" : "/posts/new",
    "tours": "/tours/",
    "tours-new" : "/tours/new",
    "tour-order": "/tour-order/",
    // "lessons": (courseId) => `/courses/${courseId}/lessons/`,
    // "lesson-details": (lessonId) => `/lessons/${lessonId}/`,
    "login": "/o/token/",
    "current-user": "/user/current-user/",
    "register": "/user/",
    "change-password": "/user/change-password/",
    "change-infor" : "/user/current-user/"
    // "comments": (lessonId) => `/lessons/${lessonId}/comments/`,
    // 'like-lesson': (lessonId) => `/lessons/${lessonId}/like/`,
    // 'rating-lesson': (lessonId) => `/lessons/${lessonId}/rating/`,
}

export const authAPI = () => axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Authorization": `Bearer ${cookie.load("access-token")}`,
    }
})

export const authAPIPost = () => axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Authorization": `Bearer ${cookie.load("access-token")}`,
        "Content-Type" : "multipart/form-data",
    }
})

export default axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Content-Type" : "multipart/form-data",
    }
})