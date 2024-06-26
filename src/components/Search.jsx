import React, { useContext, useState } from "react";
import { getWeatherDataCustom } from "../api/api";
import { WeatherDataContext } from "../context/WeatherContext";

function Search() {
    const {weather, setWeather} = useContext(WeatherDataContext);
    const [isLoading, setisLoading] = useState(0);
    const [city, setCity] = useState(``);
    function handleOnChange(event){
        const { value } = event.target;
        setCity(value);
    }
    async function handleSearch(event){
        setisLoading(1);
        event.preventDefault();
        const data = await getWeatherDataCustom(city);
        setWeather(data);
        setCity(``);
        setisLoading(0);
    }
  return (
    <>
      <form className="transition input input-bordered flex items-center gap-2 sm:w-3/4 shadow-md hover:shadow-xl ease-in glass w-[85%]">
        <input value={city} onChange={handleOnChange} type="text" className="grow" placeholder="Search" />
        {
          isLoading ? <span className="loading loading-ring loading-sm"></span> : <button className="btn btn-ghost btn-sm" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        </button>
        }
      </form>
    </>
  );
}

export default Search;
