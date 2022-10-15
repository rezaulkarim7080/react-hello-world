import React from "react";
import '../stylesheets/Book.css';

const Book =(props)=>{
return(
<div className="Book">
<h3>  Book : {props.BookName}</h3>
<h4>  Writter : {props.writter} </h4>
</div>

)
}


export default Book;