// import React from 'react';--> functional component 
// import React,{ Component} from 'react';---> Class component er jonnno
import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import Person from './components/Person';
import Product from './components/product';

// function App() {
//   return (
//     <div className="App">
//      <h1>React App JS</h1>
//      <h1>Book List</h1>
//      <Book BookName ="Mayabini" writter ="homayon kabir "/>
     
//     </div>
//   );
// }


//// USEING PRODUCT COMPONENT 

function App() {
const array ={name1:"apple",name2:"tesla"}

  return (
    <div className="App">
     <h1>React App JS</h1>
     <Product productName ="Photoshop" productprice="55.99$"/>
     <Product productName ="Illustrator" productprice="45.99$"/>
    <Product productName ="	Internet Explorer" productprice="23.99$"/>
     <Product productName ="Google Chrome" productprice="3.99$"/>
     <Product productName ="GIMP" productprice="23.99$"/>
     <Product productName ="LHMelt" productprice="87.99$"/>
     <Product productName ="ArcGIS" productprice="43.99$"/>

    
     
     
    </div>
  );
}






export default App;
