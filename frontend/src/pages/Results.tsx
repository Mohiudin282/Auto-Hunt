import { useEffect, useState } from "react";
import { CarListing } from "../components/Search";
import { useSearchParams } from "react-router-dom";
import ListingCard from "../components/ListingCard";
import { Nav } from "../components/Nav";
import Spinner from "../components/Spinner";


export function Results() {
    const [pwResults, setPwResults] = useState<CarListing[]>([]);
    const [olxResults, setOlxResults] = useState<CarListing[]>([]);
    const [queryParam] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const make = queryParam.get("make");
    const model = queryParam.get("model");
    const city = queryParam.get("city");
    useEffect(() => {
        const fetchListings = async () => {
            setLoading(true);
            try {
                fetchOlx();
                const res = await fetch(`http://127.0.0.1:8000/scrape/pakwheels/search?make=${make}&model=${model}&city=${city}`);
                const data: { results: CarListing[] } = await res.json();
                setPwResults(data.results);
                console.log(data.results);
            } catch (error) {
                console.error("Failed to fetch listings ", error);
            } finally {
                setLoading(false);
            }
        };
        const fetchOlx = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/scrape/olx/search?make=${make}&model=${model}&city=${city}`);
                const data: { results: CarListing[] } = await res.json();
                setOlxResults(data.results);
            } catch (error) {
                console.error("Failed to fetch OLX listings", error);
            }
        }
        fetchListings();
    }, [make, model, city]);

    return (
        <>
            <Nav />

            {loading && pwResults.length === 0 ? (
                <Spinner />

            ) :
                <main className="mt-16 px-10">
                    <div className="flex py-6 gap-6">
                        {/* Left: 20% for other stuff */}
                        <div className="w-[30%]">
                            {/* Add filters, suggestions, sidebar content here */}
                        </div>

                        {/* Right: 80% for Listings*/}
                        <div className="w-[70%]">
                            {pwResults.length > 0 && (
                                <>
                                    <h2 className="text-xl font-bold text-green-600 mb-2 mt-10">From PakWheels</h2>
                                    {Array.isArray(pwResults) && pwResults.map((listing, index) => (
                                        <ListingCard key={index} listings={{ ...listing }} />
                                    ))}
                                </>
                            )}
                            {olxResults.length > 0 && (
                                <>
                                    <h2 className="text-xl font-bold text-green-600 mb-2 mt-10">From OLX</h2>
                                    {Array.isArray(olxResults) && olxResults.map((listing, index) => (
                                        <ListingCard key={index} listings={{
                                            ...listing,
                                            price_currency: listing.price_currency ?? "",
                                            fuel_type: listing.fuel_type ?? "N/A", transmission: listing.transmission ?? "N/A"
                                        }} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </main>
            }
        </>


    );
}