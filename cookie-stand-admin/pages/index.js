import Head from 'next/head';
import { useState } from 'react';

import {hours} from '../data';

import Header from '../components/Header';
import CreateForm  from '../components/CreateForm';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';

export default function Home() {

  const [locations, setLocations] = useState([])


  function cookieHandler(event) {
    event.preventDefault();
    const cookieObj = {
      Location: event.target.location.value,
      // Minimum_Customers_per_Hour: event.target.Minimum.value,
      // Maximum_Customers_per_Hour: event.target.Maximum.value,
      // Average_Cookies_per_Sale: event.target.Average.value

      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    }

    setLocations([...locations, cookieObj])


  }


  //   }  

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>

        <CreateForm handler={cookieHandler} />

        
        <ReportTable reports= {locations} Hours = {hours}/>



      </main>
      <Footer length ={locations.length} />
    

    </>
  )
}





