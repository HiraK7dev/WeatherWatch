import { useState, useEffect, useContext } from 'react'
import { getWeatherData } from './api/api';
import { WeatherDataContext } from './context/WeatherContext';
import undefined from './assets/icons/unknown.png'
import Search from './components/Search';
import View from './components/View';

function App() {
  const { weather, setWeather } = useContext(WeatherDataContext);
  const [isLoading, setisLoading] = useState(0);

  useEffect(() => {
    (async () => {
      setisLoading(1);
      const data = await getWeatherData();
      setWeather(data);
      setisLoading(0);
    })();
  }, [])

  if(isLoading){
    return(
      <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center sm:h-[700px] sm:w-[800px] bg-primary sm:rounded-3xl shadow-2xl w-[100vw] h-[100vh]'>
          <img src={undefined}/>
          <div className='flex justify-center items-center w-2/3 h-[10%]'>
            <p className='font-medium text-xl font-mono'>Fetching Data...</p>
            &nbsp;&nbsp;
            <span className="loading loading-ring loading-md"></span>
          </div>
        </div>
      </div>
      </>
    )
  }

  if(weather?.cod == `404`){
    return(
      <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center sm:h-[700px] sm:w-[800px] bg-primary sm:rounded-3xl shadow-2xl w-[100vw] h-[100vh]'>
          <img src={undefined}/>
          <div className='flex justify-center items-center w-2/3 h-[10%]'>
            <p className='font-medium text-xl font-mono'>city not found</p>
            &nbsp;&nbsp;
            <button onClick={() => { location.reload() }}><span className="loading loading-infinity loading-md"></span></button>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div className='flex flex-col justify-center items-center sm:h-[700px] sm:w-[800px] bg-primary sm:rounded-3xl shadow-2xl w-[100vw] h-[100vh]'>
          <Search/>
          <View/>
        </div>
      </div>
    </>
  )
}

export default App
