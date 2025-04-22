import { Card } from "../Card";
import { useNavigate } from "react-router-dom";
export function CarsNearYou() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around items-center">
            <Card title="Cars near to you" className="bg-gray-700 text-white px-32 m-8 drop-shadow-xl hover:bg-gray-600">
                <button onClick={() => navigate("/search")}>
                    Cars near you
                </button>
            </Card>
            <Card title="Book you inspection" className="bg-gray-700 text-white px-32 m-8">
                <button onClick={() => navigate("/inspection")}>
                    Book Now
                </button>
            </Card>
        </div>

    );
}