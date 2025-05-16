
import { MainSection } from '../components/MainSection'
import { About } from '../components/About';
import { CarsNearYou } from '../components/modCards/CarsNearYou';
import { Nav } from '../components/Nav';
import useAuth from '../hooks/userAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import { InspectionBooking } from '../components/modCards/InspectionBooking';
export function LandingPage() {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard");
    }
  }, [authenticated]);

  if(authenticated === null){
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }
  return (
    <>
      <Nav />
      <MainSection />

      <About />
    </>
  );
}