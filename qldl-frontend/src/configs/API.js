import axios from "axios";
import cookie from "react-cookies";

export const endpoints = {
    // "categories": "/categories/",
    // "courses": "/courses/",
    // "lessons": (courseId) => `/courses/${courseId}/lessons/`,
    // "lesson-details": (lessonId) => `/lessons/${lessonId}/`,
    "login": "/o/token/",
    "current-user": "/users/current-user/",
    "register": "/users/",
    // "comments": (lessonId) => `/lessons/${lessonId}/comments/`,
    // 'like-lesson': (lessonId) => `/lessons/${lessonId}/like/`,
    // 'rating-lesson': (lessonId) => `/lessons/${lessonId}/rating/`,
}

export const authAPI = () => axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Authorization": `Bearer ${cookie.load("access-token")}`,
        "Access-Control-Allow-Origin": `*`
    }
})

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})