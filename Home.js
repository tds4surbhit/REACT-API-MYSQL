import React ,{useEffect}from"react";
import {Container,Button} from "reactstrap" ; 




const Home=()=>{

     useEffect(()=>{document.title="Home";},[]);




    return(
        <div>
            <Container>
               <h1 className="dispaly-3">Learn Code with Surbhit</h1>
               <p>
                   This is developed by Surbhit Sinha And it has backend in SpringBoot and FrontEnd with the help of React Js
               </p>
              
                   <Button color="primary" outline  >Start Using </Button>
               </Container>
               
        </div>
    )

    
}
export default Home;
