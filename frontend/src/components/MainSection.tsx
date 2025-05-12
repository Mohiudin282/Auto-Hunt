import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function MainSection(){
    const navigate = useNavigate();
     const makeModelMap: { [key: string]: string[] } = {
        Honda: ['Civic', 'City', 'Accord'],
        Toyota: ['Corolla', 'Yaris', 'Fortuner'],
        Suzuki: ['Alto', 'Cultus', 'Wagon R'],
        Hyundai: ['Elantra', 'Tucson', 'Sonata'],
      };
      
      const [selectedMake, setSelectedMake] = useState('');
      const [models, setModels] = useState<string[]>([]);
      
      const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const make = e.target.value;
        setSelectedMake(make);
        setModels(makeModelMap[make] || []);
      };
    

    return(
        <div className= "px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
      <div className="@container">
      <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/8d3aa257-cfbe-43af-b6bd-66f3fff46538.png")'
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Welcome back,
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Find your next car with Feelsonwheels
                  </h2>
                  {/*Search BAr*/}
                  <div className= "flex flex-wrap gap-2 items-end">
                  <div className="flex flex-col">
  <label className="text-xs text-gray-300 ml-1 mb-1">Make</label>
  <select
    className="p-2 rounded-xl text-sm text-green-800 bg-white h-10 w-37"
    value={selectedMake}
    onChange={handleMakeChange}
  >
    <option value="">Any Make</option>
    {Object.keys(makeModelMap).map((make) => (
      <option key={make} value={make}>
        {make}
      </option>
    ))}
  </select>
</div>

<div className="flex flex-col">
  <label className="text-xs text-gray-300 ml-1 mb-1">Model</label>
  <select className="p-2 rounded-xl text-sm text-green-800 bg-white h-10 w-37">
    <option value="">Model Name</option>
    {models.map((model) => (
      <option key={model} value={model}>
        {model}
      </option>
    ))}
  </select>
</div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-300 ml-1 mb-1">Model Year</label>
                    <select className="p-2 rounded-xl text-sm text-green-800 bg-white h-10 w-37">
                        <option>Model Year</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-300 ml-1 mb-1">City</label>
                    <select className="p-2 rounded-xl text-sm text-green-800 bg-white h-10 w-37">
                        <option>City</option>
                    </select>

                </div>
                <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-4xl p-2 w-49 h-10 ">Find Cars For me</button>
            </div>
          
                </div>
              </div>
      </div>
      <div className= "p-4 @container">{/*booking section*/}
        <div className="flex flex-1 flex-col items-start justify-between gap-0 rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] p-5 @[480px]:flex-row @[480px]:items-center">
        <div className="flex flex-col gap-1">
        <p className="text-[#141414] text-base font-bold leading-tight">
                  Book an Inspection
                </p>
                <p className="text-neutral-500 text-base font-normal leading-normal">
                  Get a comprehensive report on the car's condition
                </p>
                </div>
                <button  onClick={() => navigate("/inspection")} className="flex w-30 h-10 cursor-pointer items-center justify-center  rounded-xl px-4 bg-green-600 text-white text-sm ">
                <span>Book Now</span>
              </button>
        </div>

      </div>
     
        </div>
        
      </div>
      
    );
}