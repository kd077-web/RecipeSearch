
import {useParams}  from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Searchcard = ({recipe}) => {
    
    
    const params=useParams();
    return (
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/results/${recipe.id}`} className="relative" >
              
              <img className="rounded-t-lg w-full h-64 " src={recipe.image} alt="code" />
          </Link>
          <div className="p-5">
              <Link to="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
              </Link>
              <Link to= {`/results/${recipe.id}`}  className=" block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-full transition duration-300 ease-in-out hover:bg-blue-600">
              View Recipe
            </Link>  
             

              
              
              
  
              
          </div>
      </div>
    )
  }
  