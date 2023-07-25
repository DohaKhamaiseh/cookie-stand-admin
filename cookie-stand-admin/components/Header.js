import { useAuth } from "../contexts/auth"

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className='flex items-center justify-between p-3 m-0 w-full bg-gray-500 text-gray-50'>
      <h1 className='text-4xl pl-9'>Cookie Stand Admin</h1>
      <div className="flex items-center space-x-3 mr-60">
      <h3 className="bg-white text-black rounded-md px-1 ">{user.username}</h3>
      <button className="p-1 text-white bg-gray-600 rounded-md" onClick={()=>logout()}>Sign out</button>
        <h3 className="bg-white text-black rounded-md px-1 ">Overview</h3>
        
        
      </div>
    </header>
  )
}

