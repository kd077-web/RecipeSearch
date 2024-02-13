import {Link } from 'react-router-dom';
export const Hero = () => {
    return (
      <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
          <div className="text my-5 ">
              <h1 className="text-5xl font-bold">Discover Ultimate Delights</h1>
              <p className="text-2xl my-7 px-1 dark:text-slate-300"> Embark on a culinary journey where every recipe tells a story, and each dish is a masterpiece crafted with passion. Discover exquisite tastes and join us in cooking up unforgettable moments. Your kitchen adventure begins here</p>
              <Link to="Recipes" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore Recipes</Link>
          </div>
          <div className="visual my-5 lg:max-w-xl">
              <img className="rounded-lg h-100 w-100" src="https://plus.unsplash.com/premium_photo-1663013672682-3ee74a477d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcHJlcGFyaW5nJTIwcmVjaXBlfGVufDB8fDB8fHww" alt="recipe" />
          </div>
      </section>
    )
  }