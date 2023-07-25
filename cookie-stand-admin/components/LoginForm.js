export default function LoginForm(props) {

 
    return (
      <div className="h-80 bg-gray-300 w-4/6 mt-8 ml-56 mr-64 rounded-lg flex flex-col justify-around">
  
        <form onSubmit={props.handler}>
  
  
          <div className='flex justify-around'>
  
            <div className="justify-between font-mono">
              <label for="Name" >USER NAME </label>
              <input type="text" id="Name" name="Name" />
            </div>
  
            <div className="font-mono">
              <label for="Pass" >  PASSWORD </label>
              <input type="text" id="Pass" name="Pass" />
            </div>
  
  
            <button className=" bg-gray-500 text-gray-50 w-40 font-mono">SIGN IN</button>
          </div>
  
  
  
  
  
  
        </form>
  
      </div>
  
    )
  }