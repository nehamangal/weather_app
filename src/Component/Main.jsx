import React from "react"
import { useState } from "react"
import Data from "./Datas";
import axios from 'axios'
import weather from '../weather.png'
import { Country, State}  from 'country-state-city';
// import {TiWeatherCloudy} from 'react-icons/ti'
// import { useEffect } from "react";
import img from '../cloud.jpg'
const round = require('math-round');
const arr=Country.getAllCountries();
const arr2=State.getAllStates();


const api_key = "139a7d420f1aefcfdf4e8788de932a75"
const Main=()=>{
   const [initialcity,setcity]=useState("");
   const [initial_local,setlocation]=useState("");
   const [mintempe,setmintemps]=useState()
   const [maxtempe,setmaxtemps]=useState()
   const [ispresent,setpresent]=useState("false");

  
   const submission=async(e)=>{
      e.preventDefault();
     try{
      const {data} =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${initialcity}&appid=${api_key}`);
   //   console.log(data.name);
      var temp_minimum = data.main.temp_min;
      temp_minimum = temp_minimum-273.15
      temp_minimum=round(temp_minimum);
      

      let temp_maximum=data.main.temp_max;
      temp_maximum = temp_maximum-273.15
      temp_maximum=round(temp_maximum);
   
     console.log(temp_maximum);
     console.log(temp_minimum);
      setmaxtemps(temp_minimum)
      setmintemps(temp_maximum)
      setlocation(data.name);
      setcity("");  
   }
      catch(err){
        {
         alert("Please write the correct city/country name")
        }
        setcity("");
   }
      
     
      
   }
   
  

  return(
    <>
    
    <div className="Header">
       <img src={img} alt="" />
    </div>

    <div className="Main_part">
    <form onSubmit={submission}>
      <h1>Weather App</h1>
        <input type="text" value={initialcity} placeholder="Enter Your City Name" onChange={(e)=>{
            setcity(e.target.value)
           
        }}/>
        <br />
        <button>Submit</button>
     </form>
    
     
     <div className='datas'>
      <img style={{margin:"0.5rem 3rem" ,fontSize:"-5px" ,height:"5rem"}} src={weather} alt="" />
  </div>
     </div>
    
     <Data tempmin={mintempe} City_Name={initial_local} tempmax = {maxtempe}/>
     
    </>
  )

}

export default Main
