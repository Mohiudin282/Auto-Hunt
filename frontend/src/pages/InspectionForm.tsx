
export function InspectionForm(){
    return (
       //This is Outer Div with items center grey background
       <div  className="min-h-screen bg-[#cfd9e7] flex justify-center p-6">
         <h1 className="text-lg font-bold text-gray-800 mb-4">
            FeelsOnWheels Logo
          </h1>
        {/* Inner Div with white background */}
        <div className="flex items-center bg-[#cfd9e7] rounded-lg shadow-lg p-9 max-w-6xl w-full">
        <div className= "md:w-1/2 md:text-left"> {/*Left side of div*/}
        <img src="/images/inspection.png" alt="Car Inspection" className="w-full h-auto mb-4"/>
        <h2 className="text-xl font-semibold text-blue-900">
            FeelsOnWheels Inspection Service
          </h2>
        </div> {/*Left side div closed*/}
        {/*Right Side Div*/}
        <div className= "md:w-1/2 bg-[#f8fafc] p-6 rounded-lg shadow-md mt-6  md:ml-6"> {/*Right side Div*/}
            <h3 className="text-lg font-bold text-gray-800 mb-4">
            Schedule FeelsOnWheels Car Inspection
          </h3>
          <form className="space-y-3">
          <select className="w-full border px-4 py-2 rounded">
              <option value="" disabled selected>Select Location</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
              <option value="karachi">Karachi</option>
            </select>
            <select className="w-full border px-4 py-2 rounded">
              <option value="" disabled selected>Select Car Type</option>
              <option value="suv">SUV</option>
              <option value="cuv">Crossover</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
            </select>
            <input className="w-full border px-4 py-2 rounded" placeholder="Enter Car Model Year" />
            <input className="w-full border px-4 py-2 rounded" placeholder="Enter Full Address" />
            <input className="w-full border px-4 py-2 rounded" placeholder="Enter Full Name" />
            <input className="w-full border px-4 py-2 rounded" placeholder="Enter Your Phone" />

            <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">
              Submit
            </button>
          </form>

            </div>  {/*Closing Right side div*/} 
        </div>

        </div>
    
    );
}