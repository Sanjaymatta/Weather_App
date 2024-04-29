import React, { useEffect } from "react";
import { useState } from "react";

import './Home.css';
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Home() {
 

   const[data,setData]=useState(null);
   const[city,setCity]=useState('');
   const[imgurl,setImgurl]=useState('');
   const[ico,setIco]=useState('');
   const[bcolor,setBcolor]=useState('');
   const navigate=useNavigate(); 
  const handleSubmit=(e)=>{
      e.preventDefault();
      setCity(document.getElementById("search").value);  
  }
   
  useEffect(()=>{
    if(city===' '){
      return ;
    }
    else{
    const fetchWeather=async ()=>{
      try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=4cdf7251c0963b16c2aa6497f7e42e6b`;
              const response=await fetch(url);
              if(!response.ok){
                    throw new Error('failed');
                    
              }
              const report=await response.json();
              
              setData(report);
              if(report.weather[0].icon==='01d' ){
                setImgurl('http://getwallpapers.com/wallpaper/full/8/1/a/1051978-download-sunny-day-wallpaper-2560x1600-smartphone.jpg');
              }
              else if(report.weather[0].icon==='01n'){
                setImgurl('https://wallpapercave.com/wp/UAk3xHU.jpg');
              }
              else if(report.weather[0].icon==='02d' ||report.weather[0].icon==='03d' ||report.weather[0].icon==='04d' || report.weather[0].icon==='02n' ||report.weather[0].icon==='03n' ||report.weather[0].icon==='04n'){
                setImgurl('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg');
              }
              else if(report.weather[0].icon==='09n' ||report.weather[0].icon==='10n' ||report.weather[0].icon==='11n' || report.weather[0].icon==='09d' ||report.weather[0].icon==='10d' ||report.weather[0].icon==='11d'){
                          setImgurl('https://cdn.wallpapersafari.com/86/66/76pByq.jpg');
              }
              else if(report.weather[0].icon==='13d' || report.weather[0].icon==='13n'){
                setImgurl('https://www.creativeboom.com/upload/articles/fe/fe7a7aa31f988783c9fdcad974f971478206edbd_1100.jpg');
              }
              else{
                setImgurl('https://eskipaper.com/images/mist-wallpaper-3.jpg');
              }
              if(report.weather[0].icon.slice(-1)==='d'){
                setIco('https://cdn0.iconfinder.com/data/icons/season-outline-filled/614/12_-_Sunny-1024.png');
                setBcolor('linear-gradient(-90deg,skyblue 0%,white 100%)');
              }
              else if(report.weather[0].icon.slice(-1)==='n'){
                setIco('https://cdn.iconscout.com/icon/free/png-512/free-moon-2130761-1798529.png?f=webp&w=256');
                
                setBcolor('linear-gradient(90deg,black 8%,white 100%)');
              }

            }
            catch(e){
                  // console.error(e);
            }
    }
    fetchWeather();
    }
    
    
  
    
  },[city])
              
  return(
    
    <div className="background-image" style={{backgroundImage:imgurl? `url(${imgurl})`:'linear-gradient(90deg, pink, yellow)'}}>
     <div className="container" id="con">
          <div className="row">
            <center>
              <form className="d-flex mt-4 " role="search" id="form">
              <input className="form-control me-2" type="search" placeholder="Search" id="search" style={{borderRadius:'20px'}}></input>
              <button className="btn btn-outline-info" type="submit" onClick={handleSubmit} style={{borderRadius:'50px'}}><img src="https://cdn.onlinewebfonts.com/svg/img_372581.svg" className="card-image top" alt=""></img></button>

             </form>
            </center>
          </div>
          {!data && (
            <div className="row mt-4">
             <center> <h1>Enter a valid city name to get the information</h1></center>
              </div>
          )}
  
          {data && (
            
            <div>
              
              <nav class="navbar  mt-4">
                        <div class="container-fluid d-felx justify-content-end" >
                       
                        <button  type="button" className="btn btn-warning" onClick={()=>{navigate('/more-info',{state:{data}})}} target="_blank">More</button>
                        </div>
              </nav>


              
            <div className="row mt-4">
              <div className="card  shadow hadow-lg p-3 mb-5 bg-body-tertiary rounded rounded custom-card mt-4" style={{backgroundImage:bcolor}}>
                  <div className="row">
                    
                     <div  className="col-md-4">
                      <center>
                     <img alt="" src={ico} className="card-img"  style={{height:'20vh',width:'auto'}}></img>
                     
                     </center>
                      </div>
                      
                     <div className="col-md-4">
                      <center>
                      <img  className="card-img" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" style={{height:'10vh',width:'10vh'}} ></img><br/>
                      <p  className="fw-medium" style={{fontSize:'15px'}}>{data.weather[0].description}</p>
                      <p className="fw-bold" style={{fontSize:'5vh'}}>{data.name}</p>
                      </center>
                    </div>

                    <div className="col-md-4" >
                      <div className="card-body mt-3">
                      <center>
                      <FaTemperatureEmpty style={{height:'8vh',width:'10vh'}}/>
                       <div className="fw-medium" style={{fontSize:'5vh'}}>
                        {data.main.temp}<span style={{fontSize:'5vh'}}>&deg;C</span>
                        </div>
                        </center>
                        </div>
                    </div>

                  </div>
              </div>
            </div>
            <div className="row">
                 <div className="col" >
                     <div className="card" id="minTemp">
                      <center>
                      <FaTemperatureArrowDown style={{height:'10vh',width:'10vh'}} />
                      <div className="card-body">
                      <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>Min Temp</p>
                       <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>{data.main.temp_min}&deg;C</p>
                       </div>
                      </center>
                      </div>
                  </div>
                  <div className="col">
                     <div className="card" id="maxTemp">
                      <center>
                      <FaTemperatureArrowUp style={{height:'10vh',width:'10vh'}} />
                      <div className="card-body">
                      <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>Max Temp</p>
                       <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>{data.main.temp_max}&deg;C</p>
                       </div>
                      </center>
                      </div>
                  </div>
                  <div className="col">
                     <div className="card" id="humidity">
                      <center>
                      <WiHumidity style={{height:'10vh',width:'10vh'}} />
                      <div className="card-body">
                      <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>Humidity</p>
                       <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>{data.main.humidity}%</p>
                       </div>
                      </center>
                      </div>
                  </div>
                  <div className="col">
                     <div className="card" id="windSpeed">
                      <center>
                      <LuWind  style={{height:'10vh',width:'10vh'}} />
                      <div className="card-body">
                      <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>Wind Speed</p>
                       <p className="fw-medium" style={{fontSize:'3vh',color:'black'}}>{(data.wind.speed*(18/5)).toFixed(2)}km/h</p>
                       </div>
                      </center>
                      </div>
                  </div>
            </div>
        </div>
            
          )}
          
     </div>
     </div>
   
  );
  
}
export default Home;
