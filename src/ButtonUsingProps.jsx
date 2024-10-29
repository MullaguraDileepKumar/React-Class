import React from 'react'

const ButtonUsingProps = (props) => {
  const {buttonText:text ,bgColor: buttonColor,clickMe:Clicked} = props ;
  return (
      
    // <button style={{backgroundColor:props.bgColor, margin:"0px 10px"}} onClick={props.clickMe}>{props.buttonText}</button> // When line 4 is commented
       
       //<button style={{backgroundColor:bgColor , margin:"0px 10px"}} onClick={clickMe}>{buttonText}</button>// When line 4 un-commented
       
       <button style={{backgroundColor:buttonColor,margin:"0px 10px"}} onClick={Clicked}>{text}</button> // when we ant to give custom props names

  )
}

export default ButtonUsingProps
