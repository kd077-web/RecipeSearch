import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
 



export const Recipedetail = () => {
  
  const[recipe,setrecipe]=useState({});
  const{id}= useParams();
  const{name,overview,poster,ingredients,instructions}=recipe;
 
  useEffect(()=>{
    async function fetchrecipes(){
      const response=await fetch( ` http://localhost:9000/Recipes/${id}`);
      const data= await response.json();
      setrecipe(data);
    }
    fetchrecipes();
  },[id])
    
   
    return (
      <main>
        <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{name}</h1>
            <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{overview}.</p>
            <div className="flex flex-wrap justify-around">
              <div className="max-w-xl my-3">
                <img className="rounded" src={poster} alt="" />
              </div>
              <div className="max-w-xl my-3">
                
               
                
                
                <p className="text-lg text-gray-900 dark:text-slate-200">
                <h1 className="text-lg text-center font-extrabold dark:text-slate-100 mb-3 underline underline-offset-8 py-2" >Ingredients</h1>
                <ul className="list-disc">
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <li className="py-0.6" key={index}>{ingredient}</li>
                  ))}
              </ul>
                </p>
                <p className="text-lg my-2 text-gray-900 dark:text-slate-200">
                  <h1 className="text-lg text-center font-extrabold dark:text-slate-100 mb-3 underline underline-offset-8 py-2" >Instructions</h1>
                  <ul className="list-disc">
                {instructions &&
                  instructions.map((instruction, index) => (
                    <li className="py-0.6" key={index}>{instruction}</li>
                  ))}
              </ul>
                </p>
              </div>
            </div>
          </section>
         
      </main> 
    )
  }
  