import React, { useState } from 'react'
import Hot from './Hot'
import Cold from './Cold'

export default function WeatherSwitch() {
    const [weather,setWeather] = useState('Cold')
    const switchFunc = function () {
      setWeather(weather === 'Cold' ? 'Hot' : 'Cold' )
    }
  return (
    <div>WeatherSwitch
        {weather === 'Hot' ? <Hot /> : <Cold />}
        <button onClick={switchFunc}> SWITCH </button>
    </div>
  )
}
