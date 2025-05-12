
import { MainSection } from '../components/MainSection'
import { About } from '../components/About';
import { Nav } from '../components/Nav';
//import { InspectionBooking } from '../components/modCards/InspectionBooking';
export function LandingPage(){
    return(
        <>
        <Nav />
        <MainSection />
        <About />
      </>
    );
}