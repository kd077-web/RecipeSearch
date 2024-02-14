import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Searchdetail = () => {
  const [recipe, setRecipe] = useState({});
  let params = useParams();

  useEffect(() => {
    async function fetchRecipe() {
      const apiKey = 'fdf03d0ad2fb4c58bc68fd202da081eb';
      const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`)
      
      const data = await response.json();
      setRecipe(data);
    }
    fetchRecipe();
  }, [params.id]);
  const { title,  image, extendedIngredients, analyzedInstructions } = recipe;


  return (
    <main>
    <section>
      <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{title}</h1>
      
      <div className="flex flex-wrap justify-around">
        <div className="max-w-xl my-3">
          {image && <img className="rounded" src={image} alt={title} />}
        </div>
        <div className="max-w-xl my-3">
          <h1 className="text-lg text-center font-extrabold dark:text-slate-100 mb-3 underline underline-offset-8 py-2">Ingredients</h1>
          <ul className="list-disc text-lg text-gray-900 dark:text-slate-200">
            {extendedIngredients &&
              extendedIngredients.map((ingredient, index) => (
                <li key={index} className="py-0.6">{ingredient.original}</li>
              ))}
          </ul>
          <h1 className="text-lg text-center font-extrabold dark:text-slate-100 mb-3 underline underline-offset-8 py-2">Instructions</h1>
          <ul className="list-disc text-lg text-gray-900 dark:text-slate-200">
            {analyzedInstructions && analyzedInstructions.length > 0 ? (
              analyzedInstructions[0].steps.map((step, index) => (
                <li key={index} className="py-0.6">{step.step}</li>
              ))
            ) : (
              <li className="py-0.6">No instructions available</li>
            )}
          </ul>
        </div>
      </div>
    </section>
    
  </main>
  
  );
};
