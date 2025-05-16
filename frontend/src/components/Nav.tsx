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
           
           
           
           
          </div>
        </div>
        {/*Right Div*/}
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex gap-2">
            <button
              className="flex w-22 h-9 cursor-pointer hover:bg-green-500 items-center justify-center  rounded-xl px-4 bg-green-600 text-white text-sm "
              onClick={() => navigate("/Signup")}
            >
              Register
            </button>
          </div>
          </div>
      </header>
        </>
    );
}