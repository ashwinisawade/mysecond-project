import React from "react";
import { useLocation } from "react-router-dom";
import moment from 'moment';
const About=()=>{
    const location=useLocation() 
    
      console.log(location.pathname,"pathname"); // current pathname
      console.log(location.search,"search");   // current query parameters
      console.log(location.state,"state");    // current state (if any)
    
    return(
        <div>
            <h2>AboutUs<b>{moment().format('MMMM Do YYYY, h:mm:ss a')}</b></h2>
        </div>
    );
};
export default About;