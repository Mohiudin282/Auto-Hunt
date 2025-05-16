<>
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

  <title>Galileo Design</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div
    className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
    style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4F4F4] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#141414]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              Feelsonwheels
            </h2>
          </div>
          <div className="flex items-center gap-9">
            <a
              className="text-[#141414] text-sm font-medium leading-normal"
              href="#"
            >
              Car Listings
            </a>
            <a
              className="text-[#141414] text-sm font-medium leading-normal"
              href="#"
            >
              Sell Your Car
            </a>
            <a
              className="text-[#141414] text-sm font-medium leading-normal"
              href="#"
            >
              Trade in
            </a>
            <a
              className="text-[#141414] text-sm font-medium leading-normal"
              href="#"
            >
              Inspections
            </a>
            <a
              className="text-[#141414] text-sm font-medium leading-normal"
              href="#"
            >
              Financing
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-neutral-500 flex border-none bg-[#F4F4F4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F4F4F4] focus:border-none h-full placeholder:text-neutral-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                defaultValue=""
              />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#F4F4F4] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#141414]"
                data-icon="Question"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                </svg>
              </div>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#F4F4F4] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#141414]"
                data-icon="User"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                </svg>
              </div>
            </button>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/b166941e-bb53-4fdb-9f51-9c10742c66ab.png")'
            }}
          />
        </div>
      </header>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/8d3aa257-cfbe-43af-b6bd-66f3fff46538.png")'
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Welcome back, John
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Find your next car with Feelsonwheels
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] p-5 @[480px]:flex-row @[480px]:items-center">
              <div className="flex flex-col gap-1">
                <p className="text-[#141414] text-base font-bold leading-tight">
                  Book an Inspection
                </p>
                <p className="text-neutral-500 text-base font-normal leading-normal">
                  Get a comprehensive report on the car's condition
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#39E079] text-[#141414] text-sm font-medium leading-normal">
                <span className="truncate">Book Now</span>
              </button>
            </div>
          </div>
          
          
          
        

        </div>
      </div>
    </div>
  </div>

  
            
            <div className= "flex flex-wrap gap-2 items-end">
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
        
</>
