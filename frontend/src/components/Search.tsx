import React, { useState } from 'react';
//import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';

export interface CarListing {
  name?: string;
  description?: string;
  brand?: string;
  manufacturer?: string;
  model_year?: number;
  fuel_type?: string;
  transmission?: string;
  engine_displacement?: string;
  mileage?: string;
  price: number;
  price_currency?: string;
  availability?: string;
  url?: string;
  image?: string;
  title?: string;
  updated_time?: string;
}

export function Search() {
  const navigate = useNavigate();
  const makeModelMap: { [key: string]: string[] } = {
    Honda: ['Civic', 'City', 'Accord'],
    Toyota: ['Corolla', 'Yaris', 'Fortuner', 'Land Cruiser'],
    Suzuki: ['Alto', 'Cultus', 'Wagon R'],
    Hyundai: ['Elantra', 'Tucson', 'Sonata'],
  };

  
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [city, setCity] = useState('');
  const [models, setModels] = useState<string[]>([]);


  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const make = e.target.value;
    setSelectedMake(make);
    setModels(makeModelMap[make] || []);
  };

  const handleSearch = async () => {
    if (!selectedMake || !selectedModel || !city) {
      alert("Please fill in all fields");
      return;
    }
    navigate(`/results?make=${selectedMake}&model=${selectedModel}&city=${city}`);
  };

  return (
    <>
      {/*Search BAr*/}
      <div className="flex flex-wrap gap-2 items-end">
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
          <select 
          className="p-2 rounded-xl text-sm text-green-800 bg-white h-10 w-37"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="">Model Name</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-xs text-gray-300 ml-1 mb-1">City</label>
          <select className="p-2 rounded-xl text-sm text-green-800 bg-white h-10 w-37"
            value={city}
            onChange={(e) => setCity(e.target.value)}>
            <option value="" disabled>Select Location</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
            <option value="karachi">Karachi</option>
          </select>

        </div>
        <button 
        onClick={handleSearch}
        className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-4xl p-2 w-49 h-10 hover:bg-green-500">Find Cars For me</button>
      </div>
    </>
  );
};