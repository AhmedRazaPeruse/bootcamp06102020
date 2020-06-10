import React from 'react';
import './App.css';
import Car from './vehicle.js';
import Lunch from './food';
import Voilet from './color'

function App() {
  return (
    <div>
    <Car CarName = "Toyota Aqua" BikeName = "Honda 125"></Car>

    <Lunch Dish = "Student Biryani" Sweet = "Dilpasand Rabri"></Lunch>

    <Lunch Dish = "Javeed Nihari" Sweet = "Dilpasand Kheer"></Lunch>

    <Voilet></Voilet>
    <br/>
    </div>
    
  );
}

export default App;
