import { Testimonial } from "./components/Testimonial";
import { Hero } from "./components/Hero";
import { Faq } from "./components/Faq";
import { Featuredrecipe } from "./components/Featuredrecipe";
export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Featuredrecipe />
      <Testimonial />
      <Faq />
    </main>
  
   
  )
}
