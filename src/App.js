// import React from 'react';--> functional component
// import React,{ Component} from 'react';---> Class component er jonnno
import logo from "./logo.svg";
import "./App.css";
import Book from "./components/Book";
import Person from "./components/Person";
import Product from "./components/product";
import Count from "./components/count";

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

// function App() {
//   return (
//     <div className="App">
//      <h1>React App JS</h1>
//      <Product productName ="Photoshop" productprice="55.99$"/>
//      <Product productName ="Illustrator" productprice="45.99$"/>
//     <Product productName ="	Internet Explorer" productprice="23.99$"/>
//      <Product productName ="Google Chrome" productprice="3.99$"/>
//      <Product productName ="GIMP" productprice="23.99$"/>
//      <Product productName ="LHMelt" productprice="87.99$"/>
//      <Product productName ="ArcGIS" productprice="43.99$"/>
//     </div>
//   );
// }

/// multiple components from an array of object

// function App() {
// const nayouks = ['rakib','hasan','niloy','monoar','dorjoy','ifte']
// const products = [{name:"GIMP",price: '23.99$'},
//                  {name:'ArcGIS',price: '87.99$'},
//                     {name:'LHMelt',price: '3.99$'}
//                   ]
//   return (
//     <div className="App">
//      <h1>React App JS</h1>
//      <ol>
//       {
//         nayouks.map(nayouk=> <li>{nayouk}</li>)//dynamik
//       }

//      </ol>
//   <ul>
//      {
//         products.map(product=> <li>{(product.name)}</li>)//dynamik
//       }
//   </ul>
// {
// products.map(prod => <Product product = {prod}/>)
// }

//      <Product productName ="Photoshop" productprice="55.99$"/>
//      <Product productName ="Illustrator" productprice="45.99$"/>

//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>React App JS</h1>
      <Count />
    </div>
  );
}

export default App;
