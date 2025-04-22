import { Card } from "../Card";
import { useNavigate } from "react-router-dom";
export function InspectionBooking(){
    const navigate = useNavigate();
    return(
        <Card title="Book you inspection" className="bg-gray-700 text-white px-32 m-8">
            <button onClick={() => navigate("/inspection")}>
                Book Now
            </button>
        </Card>
    )
}