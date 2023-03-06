import React from "react"
import { useState } from "react"
import Data from "./Datas";
import {BsFillSunFill} from 'react-icons/bs'
import axios from 'axios'
import weather from '../weather.png'
// import {TiWeatherCloudy} from 'react-icons/ti'
// import { useEffect } from "react";
import img from '../cloud.jpg'
const round = require('math-round')

const api_key = "139a7d420f1aefcfdf4e8788de932a75"
const rep = 1;
const Main=()=>{
   const [initialcity,setcity]=useState("");
   const [initial_local,setlocation]=useState("");
   const [mintempe,setmintemps]=useState()
   const [maxtempe,setmaxtemps]=useState()

  
   const submission=async(e)=>{
      e.preventDefault();
      const {data} =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${initialcity}&appid=${api_key}`);
      // setemps(data.main.temp);
      var temp_minimum = data.main.temp_min;
      temp_minimum=((temp_minimum-32)*5)/9;
      temp_minimum=round(temp_minimum);
      // temp_minimum = {Math.round({temp_minimum})}%;
      

      let temp_maximum=data.main.temp_max;
      temp_maximum=((temp_maximum-32)*5)/9;
      temp_maximum=round(temp_maximum);
   

      setmaxtemps(temp_minimum)
      setmintemps(temp_maximum)
      setlocation(data.name);
      setcity("")
   }

  return(
    <>
    
    <div className="Header">
       <img src={img} alt="" />
    </div>

    <div className="Main_part">
    <form onSubmit={submission}>
        <input type="text" value={initialcity} placeholder="Enter Your City Name" onChange={(e)=>{
            setcity(e.target.value)
           
        }}/>
        <br />
        <button >Submit</button>
     </form>
     <div className='datas'>
      <img style={{margin:"0.5rem 3rem" ,fontSize:"-5px" ,height:"5rem"}} src={weather} alt="" />
  </div>
     </div>
     
   
    
    <Data tempmin={mintempe} City_Name={initial_local} tempmax = {maxtempe} />
   
    </>
  )

}

export default Main