import React, { useState } from 'react';
export function Search(){
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

      return (
        <>
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
          
            
        </>
      )
}