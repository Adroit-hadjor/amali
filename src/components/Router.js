import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const MyRouter = ({
   path,
   page,
   exact,
       ...props
     }) => {
        
       
       return (
         <React.Fragment>
           {
             exact === true ? 
           
            <Route
            exact 
            path={path}
            component={page}
            >
            {page}
            </Route>
         
             :
            
           
            <Route 
             path={path}
           component={page}
            >
            {page}
            </Route>
         
         

           }
             
         </React.Fragment>
       )
     }
     
      MyRouter.defaultProps = {
       exact: false,
     
     }
  /*</Route>   
     MyRouter.propTypes = {
       text: PropTypes.string.isRequired,
      // type: PropTypes.oneOf(['text', 'number', 'password']),
       style: PropTypes.any,
       onClick: PropTypes.func.isRequired
     } */

     export default MyRouter;