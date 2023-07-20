import Head from 'next/head';
import {useState} from 'react';


export default function Home() {

//   const [question, setQuestion] = useState("Ask me anything ...")
//   const [answer, setAnswer] = useState("Answer ...")

//   function questionHandler(event){
//     event.preventDefault();
//     setQuestion(event.target.question.value)
//     const randomReply = replies[Math.floor(Math.random() * replies.length)];
//     setAnswer(randomReply)

    
//   }  

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body>
      
        <Header />
        <main className='flex flex-col items-center py-4 space-y-8'>
     
           <Form/>

           <div className="flex flex-row mb-10 text-xl ml-70 font-mono"> 
                 <h1> Report Table Coming Soon ... </h1>
            </div> 
        

        </main>
        <footer className="p-4 mt-20 bg-gray-500 text-gray-50">
          &copy; dohakhamaiseh 2023
        </footer>
      </body>
    </>
  )
}

function Header() {
  return (
    <header className='flex items-center justify-between p-4 bg-gray-500 text-gray-50'>
      <h1 className='text-4xl'>Cookie Stand Admin</h1>
    </header>
  )
}

function Form() {
  return (
    <div className="h-80 bg-gray-300 w-4/6 mt-8 ml-56 mr-64 rounded-lg flex flex-col justify-around"> 

<form >
  <div className="flex flex-row mb-10 text-xl ml-80 font-bold font-mono"> 
<h1> Create Cookie Stand </h1>
    </div> 
     
     <div  className="flex flex-row mb-10"> 

         <label for="location" className= "ml-6 mr-6 font-mono">Location</label>
    <input type="text" id="location" name="location" className="w-full mr-6"/>

    </div>
      

    <div className='flex justify-around'>

    <div className="justify-between font-mono"> 
    <label for="Minimum" >Minimum Customers </label>
    <p className= "text-center pb-2 pt-2"> per Hour</p>
    <input type="text" id="Minimum" name="Minimum"  />
    </div> 

    <div className= "font-mono"> 
    <label for="Maximum" >  Maximum Customers </label>
    <p className= "text-center pb-2 pt-2"> per Hour</p>
    <input type="text" id="Maximum" name="Maximum"  />
    </div>

    <div className= "font-mono"> 
    <label for="Average" className= "pl-4" >Average Cookies</label>
    <p className= "text-center pb-2 pt-2"> per Sale</p>
    <input type="text" id="Average" name="Average" />
    </div>

    <button className=" bg-gray-500 text-gray-50 w-40 font-mono">Create</button>
       </div>


    
   
  
   
  </form>

    </div>
    
  )
}

