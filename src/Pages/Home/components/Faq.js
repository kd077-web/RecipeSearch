import { Accordian } from "./Accordian";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "How can I begin exploring recipes on the website?",
          "answer": "Click 'Explore' to find a diverse collection of recipes categorized for easy navigation"
        },
        {
          "id": 2,
          "question": "Are there recipes for specific dietary needs?",
          "answer": "yes, our platform offers a variety of recipes catering to different dietary preferences"
        },
        {
          "id": 3,
          "question": "Can i get culinary recipes ?",
          "answer": "yeah,there are many culinary type recipes that reflects our culture and tradition."
        },
        {
          "id": 4,
          "question": "Can i explore all categorial food?",
          "answer": "yes ,of course just you need to type ingredient name and it will display all categorial foods."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {faqs?.map((faq)=>(
                <Accordian  key={faq.id} faq={faq}/>
              ))}  
                                   
                       
            </div>
      </section>
  )
}
