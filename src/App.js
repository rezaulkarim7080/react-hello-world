// import React from 'react';--> functional component 
// import React,{ Component} from 'react';---> Class component er jonnno
import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
     <h1>React App JS</h1>
     <h1>Book List</h1>
     <Book BookName ="Mayabini" writter ="homayon kabir "/>
     
    </div>
  );
}

export default App;
