import {useState,useEffect} from "react";
import { Recipecardfp } from "../../../components/Elements/Recipecardfp";
import { Link } from "react-router-dom";


export const Featuredrecipe = () => {
  
  const[recipes,setrecipes]=useState([]);
  useEffect(()=>{
    async function fetchrecipes(){
      const response=await fetch( `${process.env.REACT_APP_HOST}/featuredrecipes`);
      const data= await response.json();
      setrecipes(data);
    }
    fetchrecipes();
  },[])
    
   
    return (
      
      
          <section className="my-5 ">
            
          <h1 className="text-4xl my-6 mt-3 text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Featured Recipes</h1>
                       
             
  
            <div className="flex flex-wrap justify-center lg:flex-row">
              {recipes.map((recipe)=>(
                < Recipecardfp key={recipe.key} recipe={recipe}/>
              ))}
            </div>  
            <div class="  my-2 flex items-center justify-center">
            <Link to="Recipes" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore More Recipes</Link>
            </div>
          </section>
          
          
        
    )
  }
  
