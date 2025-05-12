import { useNavigate } from "react-router-dom";


export function Nav() {
    const navigate = useNavigate();
    return (
        <>

<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4F4F4] px-10 py-3">
        {/*Left Div*/}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap- text-[#141414]">
            <div className="size-4">
             
            </div>
            <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              Feelsonwheels
            </h2>
          </div>
          <div className="flex items-center gap-9">
            <button className="text-[#141414] text-sm font-medium leading-normal"
            onClick={() => navigate("/login")} >
              Login
            </button>
           
            <button
              className="text-[#141414] text-sm font-medium leading-normal"
              onClick={() => navigate("/Signup")}
            >
              Register
            </button>
            <button
              className="text-[#141414] text-sm font-medium leading-normal"
              onClick={() => navigate("/Dashboard")}
            >
              Temp Dashboaard
            </button>
           
          </div>
        </div>
        {/*Right Div*/}
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex gap-2">
           {/*Faq button*/} <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#F4F4F4] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
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
            {/*Manage Button*/}
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
          </div>
      </header>
        </>
    );
}