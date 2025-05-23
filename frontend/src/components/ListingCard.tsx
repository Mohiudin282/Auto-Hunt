import { CarListing } from './Search';


// const CarCard = ({listings}: {listings: CarListing}) => {
//   return (
//     <a href={listings.url} target="_blank" rel="noopener noreferrer">
//       <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-200">
//         <img
//           src={listings.image}
//           alt={listings.name}
//           className="w-full h-48 object-cover rounded-md mb-3"
//         />
//         <h3 className="text-lg font-semibold">{listings.name}</h3>
//         <p className="text-sm text-gray-600">
//           {listings.model_year} • {listings.fuel_type} • {listings.transmission}
//         </p>
//         <p className="text-sm text-gray-500">{listings.mileage} driven</p>
//         <p className="text-green-700 font-bold mt-1">
//           {listings.price_currency} {listings.price.toLocaleString()}
//         </p>
//       </div>
//     </a>
//   );
// };

// export default CarCard;
function ListingCard({ listings }: { listings: CarListing }) {
  return (
    <a href={listings.url} target="_blank" rel="noopener noreferrer">
      <div className="m-7 w-full flex items-start justify-between p-2 border-gray rounded-lg shadow-sm bg-white hover:shadow-md transition">
        {/* Image */}
        <div className="w-56 h-48 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={listings.image}
            alt={listings.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 px-10 pt-2">
          <h3 className="text-lg font-semibold">{listings.title}</h3>
          <p className="text-md text-gray-600 mt-5">
            {listings.model_year} | {listings.fuel_type} | {listings.transmission} | {listings.mileage}
          </p>
          <p className="text-green-600 font-bold mt-10">
            {listings.price_currency} {listings.price.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-3">{listings.updated_time}</p>
        </div>
      </div>
    </a>
  );
}

export default ListingCard;

