
import { Route ,Routes} from "react-router-dom";
import {HomePage} from "../Pages/Home/HomePage";
import {Recipelist} from "../Pages/Recipe/Recipelist";
import { Recipedetail } from "../Pages/Recipe/components/Recipedetail";
import { Recipedetailfp } from "../Pages/Home/components/Recipedetailfp";
import { Recipesearch } from "../Pages/Recipesearch/Recipesearch";
export const Allroutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={ <HomePage/>} />
    <Route path="Recipes" element={ <Recipelist/>} />
    <Route path="/Recipe/:id" element={ <Recipedetail/>} />
    <Route path="/featuredrecipe/:id" element={ <Recipedetailfp/>} />
    <Route path="/results" element={ <Recipesearch/>} />

    </Routes>
    </>
  )
}
