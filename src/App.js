// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//     );
//   }
// }

// export default App;
//jsx
import React from "react";
import Body from "./Body/Body";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  //js
  return (
    <div className="app_container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
