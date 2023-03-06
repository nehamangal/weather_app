import '../App.scss'
const Data=({tempmin,City_Name,tempmax})=>{
 
if(tempmax){
  return(
  <div className="getdata">
     <h1>{City_Name}</h1>
     <p>{`Min_temp :${tempmin}`}&deg; C || {`Max_temp:${tempmax}`}&deg; C</p>
  </div>
  )
}

  
  
}

export default Data;