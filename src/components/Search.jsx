import React, { useState } from "react";

function Search() {
    const [city, setCity] = useState(``);
    function handleOnChange(event){
        const { value } = event.target;
        setCity(value);
    }
    function handleSearch(event){
        event.preventDefault();
        console.log(city); //Testing the working of the button
    }
  return (
    <>
      <form className="transition input input-bordered flex items-center gap-2 w-3/4 shadow-md hover:shadow-xl ease-in">
        <input value={city} onChange={handleOnChange} type="text" className="grow" placeholder="Search" />
        <button className="btn btn-ghost btn-sm" onClick={handleSearch}>
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
      </form>
    </>
  );
}

export default Search;
