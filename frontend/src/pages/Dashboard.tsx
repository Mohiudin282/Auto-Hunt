export function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-[400px] bg-white-100 flex flex-col items-center justify-center">
               
                <div className="bg-gray-500 shadow-md flex gap-0">
                <h1 className="text-3xl font-bold text-black text-center justify-center">
                    Find Cars All Over The Platforms
                </h1>
                    <select className="flex-1 min-w-[150px] p-4 border ">
                        <option disabled selected>Car Make</option>
                    </select>
                    <select className="flex-1 min-w-[150px] p-4 border ">
                        <option disabled selected>Car Model</option>
                    </select>
                    <select className="flex-1 min-w-[150px] p-4 border ">
                        <option disabled selected>Car Year</option>
                    </select>
                    <select className="flex-1 min-w-[150px] p-4 border ">
                        <option disabled selected>City</option>
                    </select>
                </div>

            </div>
        </div>

    );
}