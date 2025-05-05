export function Dashboard() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md max-w-5xl flex-col mx-auto">
                <h1 className="text-4xl font-sans+++ mb-10">
                    Search Cars On Multiple Platforms
                </h1>
                    <div className= "flex flex-wrap gap-4 items-end">
                        <div className="flex flex-col">
                            <label className="text-xs text-gray-300 ml-1 mb-1">Make</label>
                            <select className="p-3 rounded-md text-blue-600 bg-white w-40">
                                <option>Any Make</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs text-gray-300 ml-1 mb-1">Model</label>
                            <select className="p-3 rounded-md text-blue-600 bg-white w-40">
                                <option>Model Name</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs text-gray-300 ml-1 mb-1">Model Year</label>
                            <select className="p-3 rounded-md text-blue-600 bg-white w-40">
                                <option>Model Year</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs text-gray-300 ml-1 mb-1">City</label>
                            <select className="p-3 rounded-md text-blue-600 bg-white w-40">
                                <option>City</option>
                            </select>
                        
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-4xl p-3 w-40 h-12 ">Find Cars For me</button>
                    </div>
                </div>

            </div>

    );
}