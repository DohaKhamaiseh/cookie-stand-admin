import Head from 'next/head';
import { useState } from 'react';
import { useAuth } from "../contexts/auth"

import { hours } from '../data';




import LoginForm from '../components/LoginForm';

import CookieStandAdmin from '../components/CookieStandAdmin';

export default function Home() {

  const [locations, setLocations] = useState([])

  const [userInfo, setUserInfo] = useState({
    user_name: " ",
    password: 0
  })

  const { login, user, logout } = useAuth();


  function cookieHandler(event) {
    event.preventDefault();
    const cookieObj = {
      Location: event.target.location.value,
      Minimum_Customers_per_Hour: event.target.Minimum.value,
      Maximum_Customers_per_Hour: event.target.Maximum.value,
      Average_Cookies_per_Sale: event.target.Average.value,

      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    }

    setLocations([...locations, cookieObj])


  }

  function userHandler(event) {
    event.preventDefault();
    const userObj = {
      user_name: event.target.Name.value,
      password: event.target.Pass.value

    }

    setUserInfo(userObj)
    console.log(userObj)
    login(userObj.user_name,userObj.password)


  }


  console.log(userInfo)

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      
      <main className='flex flex-col items-center py-4 space-y-8'>

        {user ? (<>
          {/* <button className="p-2 text-white bg-gray-500 rounded" onClick={()=>logout()}>Sign out</button> */}
          <CookieStandAdmin handler={cookieHandler}  reports={locations} Hours={hours}  length = {locations.length} setLocations = {setLocations}/>

        </>) : (<>
          <LoginForm handler={userHandler} />


        </>)}




      </main>
     


    </>
  )
}





