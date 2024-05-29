import React, { useContext } from 'react'
import icon01d from '../assets/icons/01d.png'
import icon01n from '../assets/icons/01n.png'
import icon02d from '../assets/icons/02d.png'
import icon02n from '../assets/icons/02n.png'
import icon03d from '../assets/icons/03d.png'
import icon03n from '../assets/icons/03n.png'
import icon04d from '../assets/icons/04d.png'
import icon04n from '../assets/icons/04n.png'
import icon09d from '../assets/icons/09d.png'
import icon09n from '../assets/icons/09n.png'
import icon10d from '../assets/icons/10d.png'
import icon10n from '../assets/icons/10n.png'
import icon11d from '../assets/icons/11d.png'
import icon11n from '../assets/icons/11n.png'
import icon13d from '../assets/icons/13d.png'
import icon13n from '../assets/icons/13n.png'
import icon50d from '../assets/icons/50d.png'
import icon50n from '../assets/icons/50n.png'
import unknown from '../assets/icons/unknown.png'
import { WeatherDataContext } from '../context/WeatherContext'

function View() {

  const { weather, setWeather } = useContext(WeatherDataContext);
  console.log(weather?.main?.temp)

  return (
    <>
    <br/><br/>
    <div className='flex flex-col justify-evenly items-center w-3/4 h-[30%]'>
        {/* <h2 className='font-sans text-3xl font-medium'>North Guwahati</h2> */}
        <div className='flex justify-center items-center'>
          <img src={icon03d} className='w-22' alt='error'/>
          <div className='w-3'></div>
          <h3 className='font-sans text-7xl font-semibold'>
            36
          </h3>
        </div>
        <h2 className='font-sans text-sm font-medium'>North Guwahati</h2>
    </div>
    <br/><br/>
    {/* More Information Panel */}
    <div className='grid grid-rows-2 grid-cols-3 gap-4 w-3/4 p-3 h-[28%] glass rounded-3xl'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Wind</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>6 km/h</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Humidity</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>44%</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Real Feel</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>41°C</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Pressure</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>1000 mb</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Sea Level</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>781 m</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Temperature</h5>
          <div className='h-1'/>
          <p className='font-sans text-md font-medium'>Min: 29°C</p>
          <p className='font-sans text-md font-medium'>Max: 45°C</p>
        </div>
    </div>
    </>
  )
}

export default View