import Head from 'next/head';
import { useState } from 'react';


export default function Home() {

  const [cookie, setCookie] = useState({

  })


  function cookieHandler(event) {
    event.preventDefault();
    const cookieObj = {
      Location: event.target.location.value,
      Minimum_Customers_per_Hour: event.target.Minimum.value,
      Maximum_Customers_per_Hour: event.target.Maximum.value,
      Average_Cookies_per_Sale: event.target.Average.value

    }

    setCookie(cookieObj)
  }


  //   }  

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>

        <Form handler={cookieHandler} />


        <div className="mb-10 text-xl ml-70 font-mono flex flex-col justify-around">
          <div className="flex flex-col mb-10 text-xl ml-70 font-mono">
            {Object.keys(cookie).length !== 0 ? (
              <>
                {/* <h1> Location: {cookie.Location}</h1>
                <h1> Minimum Customers per Hour : {cookie.Minimum_Customers_per_Hour}</h1>
                <h1> Maximum Customers per Hour : {cookie.Maximum_Customers_per_Hour}</h1>
                <h1> Average Cookies per Sale : {cookie.Average_Cookies_per_Sale}</h1> */}
                <h1> {JSON.stringify(cookie)}</h1>
              </>
            ) : (
              "Add Cookie stand to see ^_^"
            )}
          </div>

          <h1> Report Table Coming Soon ... </h1>
        </div>


      </main>
      <footer className="p-4 mt-20 bg-gray-500 text-gray-50">
        &copy; dohakhamaiseh 2023
      </footer>

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

function Form(props) {
  return (
    <div className="h-80 bg-gray-300 w-4/6 mt-8 ml-56 mr-64 rounded-lg flex flex-col justify-around">

      <form onSubmit={props.handler}>
        <div className="flex flex-row mb-10 text-xl ml-80 font-bold font-mono">
          <h1> Create Cookie Stand </h1>
        </div>

        <div className="flex flex-row mb-10">

          <label for="location" className="ml-6 mr-6 font-mono">Location</label>
          <input type="text" id="location" name="location" className="w-full mr-6" />

        </div>


        <div className='flex justify-around'>

          <div className="justify-between font-mono">
            <label for="Minimum" >Minimum Customers </label>
            <p className="text-center pb-2 pt-2"> per Hour</p>
            <input type="text" id="Minimum" name="Minimum" />
          </div>

          <div className="font-mono">
            <label for="Maximum" >  Maximum Customers </label>
            <p className="text-center pb-2 pt-2"> per Hour</p>
            <input type="text" id="Maximum" name="Maximum" />
          </div>

          <div className="font-mono">
            <label for="Average" className="pl-4" >Average Cookies</label>
            <p className="text-center pb-2 pt-2"> per Sale</p>
            <input type="text" id="Average" name="Average" />
          </div>

          <button className=" bg-gray-500 text-gray-50 w-40 font-mono">Create</button>
        </div>






      </form>

    </div>

  )
}

