import React, {useState} from "react";
import {Button} from 'reactstrap';
import PropTypes from 'prop-types'

const MyButton = ({
 text,
 onClick,
 style,
 icon,
    ...props
  }) => {
     
    
    return (
      <React.Fragment>
          <Button  className="myBtn " onClick={onClick}>
              {text}{icon}
          </Button>
      </React.Fragment>
    )
  }
  
  MyButton.defaultProps = {
    text: "text",
  }
  
  MyButton.propTypes = {
    text: PropTypes.string.isRequired,
   // type: PropTypes.oneOf(['text', 'number', 'password']),
    style: PropTypes.any,
    onClick: PropTypes.func.isRequired
  }

export default MyButton;