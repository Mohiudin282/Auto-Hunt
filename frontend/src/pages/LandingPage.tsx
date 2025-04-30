
import { MainSection } from '../components/MainSection'
import { About } from '../components/About';
import { CarsNearYou } from '../components/modCards/CarsNearYou';
import { Nav } from '../components/Nav';
//import { InspectionBooking } from '../components/modCards/InspectionBooking';
export function LandingPage(){
    return(
        <>
        <Nav />
        <MainSection />
        <CarsNearYou/>
        
        <About />
      </>
    );
}