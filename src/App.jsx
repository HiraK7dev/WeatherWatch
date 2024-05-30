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
        <div className='flex flex-col justify-center items-center h-[700px] w-[800px] bg-primary rounded-3xl shadow-2xl'>
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
  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div className='flex flex-col justify-center items-center h-[700px] w-[800px] bg-primary rounded-3xl shadow-2xl'>
          <Search/>
          <View/>
        </div>
      </div>
    </>
  )
}

export default App
