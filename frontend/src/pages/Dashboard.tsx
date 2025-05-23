//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '../components/Search';
import { Nav } from '../components/Nav';
import { handleLogout } from '../utils/api';
import DisplayNl from '../components/DisplayNL';

export function Dashboard() {
  const navigate = useNavigate();
  //const [showModal, setShowModal] = useState(false);


  return (
    <main className='mt-16 px-10'>
      {/* {showModal && <MyModal onClose={() => setShowModal(false)} />} */}
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Work+Sans:wght@400;500;700;900"
        as="style"
        onLoad={(e) => {
          const link = e.currentTarget as HTMLLinkElement;
          link.rel = 'stylesheet';
        }}

      />
      <title>Dashboard</title>
      {/* Main div  */}
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Nav
            navLinks={[{ label: "Booked Inpections", path: "" }]} //onNavClick={() => setShowModal(true)} {/* triggers modal */}
            buttons={{ label: "Logout", path: "" }}
            onButtonClick={() => handleLogout(navigate)}
          />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/8d3aa257-cfbe-43af-b6bd-66f3fff46538.png")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Welcome back,
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Find your next car with Feelsonwheels
                    </h2>
                    {/*Search BAr*/}
                    <Search />

                  </div>
                </div>
              </div>
              <div className="p-4 @container">{/*booking section*/}
                <div className="flex flex-1 flex-col items-start justify-between gap-0 rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] p-5 @[480px]:flex-row @[480px]:items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#141414] text-base font-bold leading-tight">
                      Book an Inspection
                    </p>
                    <p className="text-neutral-500 text-base font-normal leading-normal">
                      Get a comprehensive report on the car's condition
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/inspection")}
                    className="flex w-30 h-10 cursor-pointer items-center justify-center  rounded-xl px-4 bg-green-600 text-white text-sm ">
                    <span>Book Now</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
      <DisplayNl/>
    </main>
  );
}