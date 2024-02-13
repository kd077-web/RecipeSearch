import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import {Search} from "../Sections/Search";
export const Header = () => {
  const[search,setsearch]=useState(true);
  const[dark,setdark]=useState(JSON.parse(localStorage.getItem('dark'))||false);
  useEffect(()=>{
    localStorage.setItem("dark",JSON.stringify(dark));
    if(dark){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[dark])
  return (
    <header>
    
    
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      
      <span class="self-center text-3xl font-bold whitespace-nowrap dark:bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 via-blue-500 to-purple-500  bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 via-blue-500 to-purple-500">RECIPEHUB</span>
  </Link>
  <div class="flex md:order-2">
    
    
           <span onClick={()=>setdark(!dark)} className=" cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
          <span onClick={()=>setsearch(!search)} className=" cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
          </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
                <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="Recipes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Recipes</Link>
              </li>
        
      </ul>
    </div>
  </div>
</nav>
{ search && <Search /> }
</header>


  )
}
