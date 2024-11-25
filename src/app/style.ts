import styled from "styled-components"

export const ComponentPricing= styled.div`
    width: 450px;
    margin: auto;
    background-color: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    @media(max-width:375px) {
      width: 350px;
      margin: auto;
    }
    .properties{
        margin-top:20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        button{
            margin-right: 20px;
            padding:10px 45px;
            border-radius: 20px;
            border: none;
            background: hsl(227, 35%, 25%);
            color:hsl(225, 20%, 60%);
            cursor: pointer;
        }
        @media (max-width:375px) {
          display: flex;
          flex-direction: column;
          .details-options{
            margin-bottom: 15px;
          }
        }
    }
    .view-price{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 20px 0;
        @media (max-width: 375px){
          display: flex;
          flex-direction: column;
          position: relative;
          .value{
            position: absolute;
            top: 90px;
            left:105px;
          }
        }
    }
    .month-year{
        display: flex;
        justify-content: center;
        margin-left:50px;
       
       @media (max-width:375px) {
        margin-top: 25px;
       }
    }
    .options{
        display: flex;
        gap: 10px;
        margin: 40px 0;
    }
    .range{
        margin: 20px 0;
       appearance: none;   
       -webkit-appearance: none;
      background:hsl(224, 65%, 95%);
     
    
    }
   .range::-webkit-slider-runnable-track{
     height: 6px;
    border-radius: 3px;
    -webkit-appearance:none;
    background: linear-gradient(to right, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%);
    transition: all  ease-in-out;
    background-size: var(--value) 100%;
    background-repeat: no-repeat;
    
   
   }
   
   .range::-webkit-slider-thumb{
    -webkit-appearance: none;
  
 
    margin-top: -13px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: hsl(174, 86%, 45%);
    cursor: pointer;
    background-image: url('./images/icon-slider.svg');
    background-repeat: no-repeat;
    background-position: center;
   }
   .range::-webkit-progress-value{
 
    background-color: hsl(174, 77%, 80%);
   }
   .range::-webkit-slider-thumb:active{
    background:  hsl(174, 86%, 45%);
   }
  

.switch {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.switch + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

.switch--shadow + label {
  padding: 2px;
  width: 40px;
  height: 20px;
  background-color: #dddddd;
  border-radius: 60px;
}
.switch--shadow + label:before,
.switch--shadow + label:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: '';
}
.switch--shadow + label:before {
  right: 1px;
  background-color: #f1f1f1;
  border-radius: 20px;
  transition: all 0.4s;
}
.switch--shadow + label:after {
  width: 20px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}
.switch--shadow:checked + label:before {
  background-color: #8ce196;
}
.switch--shadow:checked + label:after {
  transform: translateX(20px);
}
.details{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
}
.discount{
    font-size: 12px;
    color:  hsl(15, 100%, 70%);
    background-color: hsl(14, 92%, 95%);
    padding: 5px;
    border-radius: 8px;
}
.strong-value{
    font-size: 30px;
}
`;
export const ComponentArea= styled.div`
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('./images/bg-pattern.svg');
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-color: hsl(230, 100%, 99%);
    
  .title-trial{
    height: 150px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    background-image: url('./images/pattern-circles.svg'); 
    background-position: top center;
    background-repeat: no-repeat;

    h2{
      margin-top: 4px;
      font-size: 15px;
      color:hsl(225, 20%, 60%);
      max-width: 300px;
      font-weight: 600;
    }
  }
 @media(max-width:375px) {
    width: 375px;
 }

`