import React,{useState, useEffect} from "react";

import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
//import { ListGroupItem ,} from "reactstrap";
import { toast } from "react-toastify";

const Allcourse=()=>{

    useEffect(()=>{document.title="All Courses";}, []);
//this function is created to call the Server

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response);
                console.log(response.data);
                toast.success("Courses have been loaded");
                setCourses(response.data);


            },
            (error)=>{
                console.log(error);
                toast.error("Server Down");

            }
        );
    };

    useEffect(()=>{getAllCoursesFromServer();}, []);





    const[courses,setCourses]=useState([]);
    
    const upDateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id!== id));
    };  



    return (
        <div>
            <h1>All Course</h1>
            <p>List of Courses are as Follows</p>
            {
                courses.length>0 ? courses.map((item) => <Course key={item.id} course={item} update={upDateCourses} />): "No courses"
            }
        </div>
    );

};
export default Allcourse;