import { useState, useEffect, useContext } from 'react'
import { getWeatherData } from './api/api';
import { WeatherDataContext } from './context/WeatherContext';
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
      <p>Loading...</p>
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
