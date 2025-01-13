import React, { useEffect, useState } from 'react'

const WeatherCard = () => {

const[weather , setWeather]=useState(null)
const [loading , setLoading]=useState(true)
const[error , setError]= useState(false)

const fetchWeather = async ()=>{
try {    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1519ea44e238413aa9481023242711&q=Indore&aqi=no
    `)
        const data  = await response.json()
        setWeather(data)
    
} catch (error) {
    setError(true)
    // console.log(error)
}

finally{
setLoading(false)
}
    // console.log(weather)
}


useEffect(()=>{

    fetchWeather()
},[])

if(error){

    return <h1 className='text-red-500 w-full flex items-center justify-center m-5 font-bold text-xl' >Something went wrong</h1>
}

if(loading){
return (

    <div>
<h1>Loading...</h1>
    </div>
)
    
}

  return (
    <div className="h-48 p-4 rounded-sm border shadow col-span-1">
    <h1 className="text-xl font-bold my-3">Today's Weather</h1>
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold my-1">{weather?.current.temp_c}</h1>
        <p className="text-2xl text-gray-600 my-1">{weather?.location.name}</p>
      </div>
      <div>
        <img
          className="h-16"
          src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
          alt=""
        />
        <p className="text-sm text-gray-600 text-center">Sunny</p>
      </div>
    </div>
  </div>

  )
}

export default WeatherCard
