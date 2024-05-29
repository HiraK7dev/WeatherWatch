import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const WeatherDataContext = createContext()

function WeatherContext({ children }) {
  const [weather, setWeather] = useState(null);
  return (
    <WeatherDataContext.Provider value={{weather, setWeather}}>
        {
            children
        }
    </WeatherDataContext.Provider>
  )
}

export default WeatherContext