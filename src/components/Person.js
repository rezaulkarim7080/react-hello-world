//import React from "react";
import React, { Component } from "react";

function Person() {
  return (
    <div>
      <h1>I am Person Component</h1>
    </div>
  );
}

/// ARROW FUNCTTION

// let Person = () => {
//   return(
//     <div>
//       <h1>This is from person
//       </h1>
//     </div>
//   )
// }

// // DYNAMIC ARROW FUNCTTION

// let Person = (props) => {
//   return(
//     <div>
//       <h3> Name = {props.name} and subject = {props.subject} age = {props.age} years</h3>

//     </div>
//   )
// }

// // DYNAMIC class componenet
// class Person extends Component{
//   constructor(props){
// super(props);
//     }
//   render(){
//  return(
//     <div>
//       <h3> ChildrenName = {this.props.name} and subject = {this.props.subject} Childrenage = {this.props.age} years</h3>

//     </div>
//   )

//   }
// }

/// WITHOUT CONSTRUCTOR

// class Person extends Component{
//   render(){
//  return(
//     <div>
//       <h3> Name = {this.props.name} and subject = {this.props.subject} age = {this.props.age} years</h3>
//     </div>
//   )
//   }
// }

export default Person;
