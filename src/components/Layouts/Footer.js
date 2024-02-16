
import {Link} from "react-router-dom";
 export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <Link  to ="/ "><h2 className="text-2xl font-bold">RecipeHub</h2></Link>
          <p className="mt-2 text-sm">Your go-to ingredient-based recipe search engine.</p>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>&copy; 2024 RecipeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


