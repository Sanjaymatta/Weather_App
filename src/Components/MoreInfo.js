import React from "react";
import { WiDirectionUpLeft } from "react-icons/wi";
import './MoreInfo.css';
import { IoIosCloudy } from "react-icons/io";
import {  useLocation, useNavigate } from "react-router-dom";
import { GiRaining } from "react-icons/gi";
import { FaTemperatureLow } from "react-icons/fa";
const MoreInfo=()=>{
    const location=useLocation();
   
    const info=location.state.data;
    
    const navigate=useNavigate();
    return(
        <div className="con">
          <button  type="button" className="btn btn-warning" onClick={()=>{navigate('/',{state:{info}})}} target="_blank">Back</button>
           <center><h3 style={{fontSize:'10vh',color:'white'}}>More Info</h3></center>
        <div className="container" >
        <div className="row m-4">
            <div className="col ">
                <div className="card" id="wind">
                
                    <div className="card-body center-content" >
                    <WiDirectionUpLeft style={{height:'100%',width:'100%'}}/>
                  <p className="fw-medium" style={{fontSize:'2vh',color:'black'}}>Wind Direction: {info.wind.deg}&deg;</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" id="cloudiness">
                
                    <div className="card-body center-content" >
                    <IoIosCloudy  style={{height:'100%',width:'100%'}}/>
                  <p className="fw-medium" style={{fontSize:'2vh',color:'black'}}>Cloudiness {info.clouds.all}%;</p>
                 
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card" id="rain">
                
                    <div className="card-body center-content" >
                    <p className="fw-medium" style={{ fontSize: '2vh', color: 'black' }}>Rainfall in last 1hr </p><br/>
                    <GiRaining  style={{height:'100%',width:'100%'}}/>
                   
                    {info.rain && info.rain['1h'] && (                 
    <p className="fw-medium" style={{ fontSize: '2vh', color: 'black' }}> Rain volume for the last 1 hour {info.rain['1h']}mm</p>  
                     )}
                     {!info.rain && (
                        <p className="fw-medium" style={{ fontSize: '2vh', color: 'black' }}>0mm </p>
                     )}
                      </div>
                </div>
            </div>
              
        </div>
        <div className="row m-4">
        <div className="col">
                <div className="card" id="sealevel">
                    <div className="card-body center-content" >
                    <img src="https://cdn1.iconfinder.com/data/icons/climate-change-solid/64/climate-18-1024.png" alt=""  id='sea_img'></img>
                    <p className="fw-medium" style={{fontSize:'2vh',color:'black'}}><center> Pressure at SeaLevel:<p>{info.main.sea_level}hPa</p></center></p>
                 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" id="grdlevel">
                    <div className="card-body center-content" >
                    <img src="https://cdn3.iconfinder.com/data/icons/nature-and-science/30/earth-element-7-512.png" alt=""  id='sea_img'></img>
                    <p className="fw-medium" style={{fontSize:'2vh',color:'black'}}><center> Pressure at GroundLevel:<p>{info.main.ground_level}hPa</p></center></p>
                 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" id="temp">
                    <div className="card-body center-content" >
                    <FaTemperatureLow style={{height:'100%',width:'100%'}} />
                    <p className="fw-medium" style={{fontSize:'2vh',color:'black'}}>Temperature Feels Like:{info.main.feels_like}&deg;C</p>
                 
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
       
       
    
    )
}
export default MoreInfo;