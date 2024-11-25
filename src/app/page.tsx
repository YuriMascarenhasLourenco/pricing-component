'use client'
import { ChangeEvent, useEffect, useState } from "react";
import { ComponentArea, ComponentPricing } from "./style";
import backgroundSvg from './images/bg-pattern.svg'

export default function Home() {
  const[discount,setDiscount]= useState(false)
  const[value, setValue]= useState(16)
  const [followers,setFollowers]=useState(100)
  const changeRange=()=>{
    if(discount===false){
      if( followers>0 && followers<50){
        setValue(8)
      }
      if(followers>50 && followers<100){
        setValue(12)
      }
      if(followers>=100 && followers<500){
        setValue(16)
      }
      if(followers >=500 && followers<1000){
        setValue(24)
      }
      if(followers===1000){
        setValue(36)
      }
    }
    if(discount){
      if( followers>0 && followers<50){
        let count = 8*12*0.75
        setValue(count)
      }
      if(followers>50 && followers<100){
        setValue(12*12*0.75)
      }
      if(followers>=100 && followers<500){
        setValue(16*12*0.75)
      }
      if(followers >=500 && followers<1000){
        setValue(24*12*0.75)
      }
      if(followers===1000){
        setValue(36*12*0.75)
      }
    }
  }
  const changeFollowers=(e:ChangeEvent<HTMLInputElement>)=>{
  setFollowers(parseInt(e.target.value))
changeRange()
  }
  useEffect(()=>{
    const valuePercentage = ((followers-1 ) / (1000-1 ))*200 ;
    document.documentElement.style.setProperty('--value', `${valuePercentage}%`);
    changeRange()
  },[followers,discount])
  
  return (
    <ComponentArea>
      <div className="title-trial">
        <h1>Simple,traffic-based design</h1>
        <h2>Sign-up for our 30-day trial. No credit card required.</h2>
      </div>
      <div className="background"></div>
       <ComponentPricing>
    <div className="view-price">
      <label htmlFor="" >{followers ===1000? `1M`:`${followers}k`} Page views</label>
      <label className="value" ><strong className="strong-value ">${value.toFixed(2)}</strong>{discount ?'/year':'/month'}</label>
    </div>

    <input type="range" className="range" id="" min={1}  max={1000} value={followers} onChange={changeFollowers} />
    
  
    <div className="month-year">
      <div className="options">
        <label htmlFor="">Monthly billing</label>
        <div className="switch__container">
          <input id="switch-shadow" className="switch switch--shadow" type="checkbox" checked={discount} onChange={()=>setDiscount(!discount)}/>
         <label htmlFor="switch-shadow"></label>
        </div>
        <label htmlFor="">Year billing</label>
        <label htmlFor="" className="discount"><strong>25% discount</strong></label>
      </div>
      
    </div>
    
    <hr />
    <div className="properties">
      <div className="details-options">
        <div className="details">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
          <p>Unlimited websites</p>
        </div>
        <div className="details">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
          <p>100% data ownership</p>
        </div>
        <div className="details">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
          <p>Email reports</p>
        </div>
      </div>
      <div>
      <button>Start my trial</button>
      </div>
      
    </div>
   </ComponentPricing>
    </ComponentArea>
  );
}
