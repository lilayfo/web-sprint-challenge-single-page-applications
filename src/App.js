import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import PizzaApp from "./PizzaApp";
import Pizza from './Assets/Pizza.jpg'
import PizzaForm from "./PizzaForm";
import "./App.css";


const App = () => {
  return (
    <>
      <nav className="navbar">
       <Link to="/">Home</Link>
      <Link to="/pizza">Form</Link>
      </nav>
      <h1>BloomTech Eats</h1>
      <img src={Pizza} alt="image of pizza"></img>
      <Routes>
        <Route path="/" element={<PizzaApp />}>Home</Route>
        <Route path="/pizza" element={<PizzaForm />}/>
        </Routes>
    </>
  );
};
export default App;
