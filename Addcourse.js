import React, { Fragment , useEffect , useState } from 'react';
import { Button, Container, Form,Input ,FormGroup } from 'reactstrap';


import axios from 'axios';
import base_url from './../api/bootapi';
import { toast } from 'react-toastify';

const Addcourse=()=>{

    useEffect(()=>{document.title="Add-Course";},[]);

   
    const[course,setCourses]= useState({});

   //form handler function  
const handleform=(e)=>{
    console.log(course);
    e.preventDefault(); 
    postDatatoServer(course);
}

//creating function to post data to server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("Success");
            toast.success("courses added Successfully");
            setCourses({});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Error ! Something went wrong");

        }
        
    );

};




return(
<Fragment>
    <h1 className="text-center my-3">Add Course</h1>
    <Form onSubmit={handleform}>
         <FormGroup>
             <label for="userId">Course Id</label>
             <Input type="text" placeholder ="Enter here" name ="userId" id="userId" onChange={(e)=>{setCourses({...course, id: e.target.value});  }}/>
         </FormGroup>

         <FormGroup>
             <lable for="title">Course Title</lable>
             <Input type="text" placeholder ="Enter title here" id="title" onChange={(e)=>{setCourses({...course,title: e.target.value});}}/>
         </FormGroup>

         <FormGroup>
             <lable for="Course description">Course Description</lable>
             <Input type="textarea" placeholder="Enter Description here" id="description" onChange={(e)=>{setCourses({...course,description: e.target.value});}}/>
         </FormGroup>
         <Container className="text-center">
             <Button type="submit" color="success"> AddCourse</Button>
             <Button type="reset" color="warning ml-2" > Clear </Button>
         </Container>
    </Form>

</Fragment>
);
};
export default Addcourse;
