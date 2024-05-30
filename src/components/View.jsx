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
import { WeatherDataContext } from '../context/WeatherContext'

function View() {

  const { weather, setWeather } = useContext(WeatherDataContext);
  function setIcon(w){
    const icon = {
      "01d": icon01d,
      "01n": icon01n,
      "02d": icon02d,
      "02n": icon02n,
      "03d": icon03d,
      "03n": icon03n,
      "04d": icon04d,
      "04n": icon04n,
      "09d": icon09d,
      "09n": icon09n,
      "10d": icon10d,
      "10n": icon10n,
      "11d": icon11d,
      "11n": icon11n,
      "13d": icon13d,
      "13n": icon13n,
      "50d": icon50d,
      "50n": icon50n,
    }
    for(let key in icon){
      if(`${w?.weather[0]?.icon}` == key){
        return icon[key];
      }
    }
  }
  const img = setIcon(weather);

  //Function to convert meter to kilometer
  function metersToKilometers(meters) {
    return meters / 1000;
  }

  return (
    <>
    <br/><br/>
    <div className='flex flex-col justify-evenly items-center w-3/4 h-[30%]'>
        {/* <h2 className='font-sans text-3xl font-medium'>North Guwahati</h2> */}
        <div className='flex justify-center items-center'>
          <img src={img} className='w-22'/>
          <div className='w-3'></div>
          <h3 className='font-sans text-7xl font-semibold'>
            {
              `${parseInt(weather?.main?.temp)}` + `°C`
            }
          </h3>
        </div>
        <h2 className='font-sans text-sm font-medium tracking-wider'>
          {
            weather?.name
          }
        </h2>
    </div>
    <br/><br/>
    {/* More Information Panel */}
    <div className='grid grid-rows-2 grid-cols-3 gap-4 w-3/4 p-3 h-[28%] glass rounded-3xl'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Wind</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>
            {
              `${parseInt(weather?.wind?.speed)} ` + `km/h`
            }
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Humidity</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>
            {
              `${parseInt(weather?.main?.humidity)} ` + `%`
            }
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Real Feel</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>
            {
              `${parseInt(weather?.main?.feels_like)}` + `°C`
            }
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Pressure</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>
            {
              `${parseInt(weather?.main?.pressure)} ` + `mb`
            }
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Sea Level</h5>
          <div className='h-1'/>
          <p className='font-sans text-xl font-medium'>
            {
              `${parseInt(weather?.main?.sea_level)} ` + `m`
            }
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <h5 className='font-sans text-xs font-medium'>Visibility</h5>
          <div className='h-1'/>
          <p className='font-sans text-md font-medium'>
            {
              `${parseInt(metersToKilometers(weather?.visibility))} ` + `km/h`
            }
          </p>
        </div>
    </div>
    </>
  )
}

export default View