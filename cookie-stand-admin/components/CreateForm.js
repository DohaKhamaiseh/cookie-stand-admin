export default function CreateForm(props) {
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
  
            <button className=" bg-gray-500 text-gray-50 w-40 font-mono rounded-md">Create</button>
          </div>
  
  
  
  
  
  
        </form>
  
      </div>
  
    )
  }