import axios from "axios";
import { useEffect, useState } from "react";

type Booking = {
    booking_id: number;
    user_id: number;
    location: 'Lahore' | 'Islamabad' | 'Karachi';
    car_type: 'SUV' | 'Crossover' | 'Sedan' | 'Hatchback';
    model_year: number;
    full_address: string;
    full_name: string;
    phone_no: string;
    booking_time: string; // or Date if you convert it
    status: 'pending' | 'accepted' | 'rejected';
};


export function AdminPanel() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    //this is for displaying bookings
    useEffect(() => {
        const fetchBookings = async () => {
            const res = await axios.get('http://localhost:3000/inspection');
            setBookings(res.data.result);
        }
        fetchBookings();
    }, []);

    // this is for reflecting the change immediately

    const submitChange = async (newStatus: Booking["status"], booking_id: number) => {
        try {
            await axios({
                method: 'put',
                url: `http://localhost:3000/inspection/${booking_id}`,
                data: {
                    status: newStatus
                }
            });
            setBookings((prev) => 
                prev.map((b) => b.booking_id === booking_id ? {...b, status: newStatus}: b)
            );
        } catch (error) {
            
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Inspection Bookings</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Booking ID</th>
                        <th className="border p-2">User ID</th>
                        <th className="border p-2">Location</th>
                        <th className="border p-2">Car Type</th>
                        <th className="border p-2">Model Year</th>
                        <th className="border p-2">Full Address</th>
                        <th className="border p-2">Full Name</th>
                        <th className="border p-2">Phone no.</th>
                        <th className="border p-2">Booking Time</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr>
                            <td className="border p-2">{booking.booking_id}</td>
                            <td className="border p-2">{booking.user_id}</td>
                            <td className="border p-2">{booking.location}</td>
                            <td className="border p-2">{booking.car_type}</td>
                            <td className="border p-2">{booking.model_year}</td>
                            <td className="border p-2">{booking.full_address}</td>
                            <td className="border p-2">{booking.full_name}</td>
                            <td className="border p-2">{booking.phone_no}</td>
                            <td className="border p-2">{booking.booking_time}</td>
                            <td className="border p-2">
                                <select
                                    className="border px-2 py-1"
                                    value={booking.status}
                                    onChange={(e) => {
                                        const newStatus = e.target.value as Booking["status"]
                                        submitChange(newStatus, booking.booking_id);
                                    }}
                                >
                                    <option value="pending" disabled>Pending</option>
                                    <option value="accepted">Accepted</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

