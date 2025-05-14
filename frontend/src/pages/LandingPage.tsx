
import { MainSection } from '../components/MainSection'
import { About } from '../components/About';
import { Nav } from '../components/Nav';
import { Search } from '../components/Search';
//import { InspectionBooking } from '../components/modCards/InspectionBooking';
export function LandingPage(){
    return(
        <>
        <Nav />
        <MainSection />
        <div className="flex flex-col gap-2 text-left mt-10 mb-10 items-center">
          <Search />
        </div>
        <About />
      </>
    );
}