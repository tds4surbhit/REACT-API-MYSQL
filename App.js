import logo from './logo.svg';
import './App.css';
import React from "react";
import { Button, Container ,Row ,Col     } from 'reactstrap';
import { ToastContainer , toast } from 'react-toastify';
import  Allcourse from './Components/Allcourse';
import  Header from './Components/Header';
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css';
//import Course from './Components/Course';
import Addcourse from './Components/Addcourse';
import Menus from './Components/Menus';
import {BrowserRouter as Router, Route } from "react-router-dom";




 
function App() {
   const btnHandle =()=>{
     toast("Don't push me down");
   }


  return (
    <div >
      <Router>
      <ToastContainer />
       <Container>
         <Header/>
         <Row>
           <Col md={4}>
             <Menus />
           </Col>
           <Col md={8}>
             
             <Route path="/" component={Home} exact />
             <Route path="/add-course" component={Addcourse} exact />
             <Route path="/view-courses" component={Allcourse} exact />
             
             





           </Col>
         </Row>
       </Container>
      </Router>
      
       

     
    </div>
  );
}

export default App;
