import '../App.scss'
const Data=({tempmin,City_Name,tempmax})=>{
  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
  const month = date.getMonth()+1;
      const showDate=date.getDate()+'/'+month+'/'+date.getFullYear();
if(tempmax){
  return(
  <div className="getdata">
     <h1>{City_Name}</h1>
     <p>{`Min_temp :${tempmin}`}&deg; C || {`Max_temp:${tempmax}`}&deg; C</p>
     <p>{showDate} || {showTime}</p>
  </div>
  )
}

  
  
}

export default Data;
