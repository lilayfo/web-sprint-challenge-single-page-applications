import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PizzaApp()  {
  return (
    <div className="pizza-app">
      <h1>Welcome to our Pizza Hub</h1>
      <Link to="/pizza">
        <button id="order-pizza">Build your pizza now!</button>
      </Link>
    </div>
    
  )
};





