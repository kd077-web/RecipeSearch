import {useState,useEffect} from "react";
import { Recipecard } from "../../components/Elements/Recipecard";


export const Recipelist = () => {
  
  const[recipes,setrecipes]=useState([]);
  useEffect(()=>{
    async function fetchrecipes(){
      const response=await fetch( `${process.env.REACT_APP_HOST}/Recipes`);
      const data= await response.json();
      setrecipes(data);
    }
    fetchrecipes();
  },[])
    
   
    return (
      <main>
          <section className="my-5">
            
          <h1 className="text-4xl  mt-3 text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Recipes</h1>
                       
             
  
            <div className="flex flex-wrap justify-center lg:flex-row">
              {recipes.map((recipe)=>(
                < Recipecard key={recipe.key} recipe={recipe}/>
              ))}
            </div>  
          </section>
          
        </main> 
    )
  }
  
