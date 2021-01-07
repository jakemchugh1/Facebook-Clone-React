import React from "react"
import Header from './Header'
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">

      <Header />

      <div className='app__body'>
        <Sidebar />
        {/* Sidebar */}
        {/*Widgets */}
      </div>
      


    </div>
  );
}

export default App;
