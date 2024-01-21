import React from 'react'
import './Exercises.css'

function Exercises1() {
  const showCompany = (Element) => { 

    return <div>   name : {Element.name} ,  
              revenue : {Element.revenue}  .<br></br>
    </div>
  }

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
          {companies.map(Element => showCompany(Element))}
        
      </div>
    </div>
  )
}
 
function Exercises2() {
  const getClassName = (temperature) => {

    if(temperature<15){
      return <div  id="weatherBox" className='freezing'> freezing</div>
    }
    if(temperature>15&&temperature<30)
    {
       return <div id="weatherBox" className='fair'> fair</div>
    }
    else{
      return <div id="weatherBox" className='hell-scape'> hell-scape</div>

    }

   }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {getClassName(16)}
      </div>
    </div>
  )
}

function SpotCheck1() {
  const sum = (num1,num2) => {
    return <div> {num1+num2} </div>
   }
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Spot Check 1 Component Lesson  </h4>
      {sum(5,3)}
      
    </div>
  )
}

export  { Exercises1, Exercises2 , SpotCheck1} 