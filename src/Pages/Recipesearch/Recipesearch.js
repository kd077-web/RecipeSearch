
import { useLocation } from 'react-router-dom';
import { Searchcard } from '../../components/Elements/Searchcard';
export const Recipesearch = () => {
    const location = useLocation();
    const query =  new URLSearchParams(location.search).get('query');
    const recipes = location.state && location.state.recipes;
    console.log('Query:', query);
    console.log('Recipes:', recipes);
  return (
   <main>
      <h1 className="text-xl my-6 mt-3 text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Searched Recipes{query}</h1>
       
     
       <div className="flex flex-wrap justify-center lg:flex-row">
              {recipes?.map((recipe)=>(
                < Searchcard key={recipe.id} recipe={recipe}/>
              ))}
            </div>  


   </main>
  )
}
