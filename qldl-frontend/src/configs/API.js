import axios from "axios";
import cookie from "react-cookies";

export const endpoints = {
    // "categories": "/categories/",
    "tour": "/tour/",
    "post": "/post/",
    "posts": "/posts/",
    "tours": "/tours/",
    // "lessons": (courseId) => `/courses/${courseId}/lessons/`,
    // "lesson-details": (lessonId) => `/lessons/${lessonId}/`,
    "login": "/o/token/",
    "current-user": "/user/current-user/",
    "register": "/users/",
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

export default axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Content-Type" : "multipart/form-data",
    }
})