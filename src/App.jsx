
import React from 'react'
import Navbar from './components/Navbar'
import Topics from './components/Topics'
import Form from './components/Form'
import WeatherCard from './components/WeatherCard'
import NewsCard from './components/NewsCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Topics/>
      <Form/>
      <WeatherCard/>
      <NewsCard/>


    </div>
  )
}

export default App
