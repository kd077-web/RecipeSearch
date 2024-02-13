import React from 'react'
import {Header} from "./components/Layouts/Header";
import { Allroutes } from './Routes/Allroutes';
import { Footer } from './components/Layouts/Footer';

export const App = () => {
  return (
    <div className="App dark:bg-slate-800">
      
    <Header />
    <Allroutes />
    <Footer />
    
    </div>
    
    
    
    
    
  )
}
