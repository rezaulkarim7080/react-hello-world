import React from "react";
//import '../stylesheets/Book.css';

const Book =(props)=>{
    // const bookStyle ={
    //     border :"2px solid red",
    //     color : "red"
    // }
    // style={bookStyle}----> eta div er virtor hobe
return(
<div className="Book" >
<h3>  Book : {props.BookName}</h3>
<h4>  Writter : {props.writter} </h4>
</div>

)
}


export default Book;