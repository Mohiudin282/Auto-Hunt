import { useNavigate } from "react-router-dom";

type Props = {
  navLinks?: { label: string; path: string; onNavClick?: () => void }[];
  buttons?: { label: string; path: string };
  onButtonClick?: () => void;
}


export function Nav({ navLinks, buttons, onButtonClick }: Props) {
  const navigate = useNavigate();
  return (
    <>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4F4F4] px-10 py-3">
        {/*Left Div*/}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap- text-[#141414]">
            <img
              src="/logo.svg" // Replace with your actual path (e.g. "/assets/logo.png")
              alt="Feelsonwheels"
              className="h-12 w-auto"
            />
            <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              {/*Feelsonwheels*/}
            </h2>
          </div>


        </div>
        {/*Right Div*/}
        <div className="flex flex-1 justify-end gap-8">
          {navLinks && (
            <div className="flex items-center gap-9">
              {navLinks.map((link) => (
                <button className="text-[#141414] text-sm font-medium leading-normal cursor-pointer"
                  onClick={() => {
                    if (link.onNavClick) {
                      link.onNavClick();
                    }
                    else if (link) {
                      navigate(link.path)
                    }
                  }} >
                  {link.label}
                </button>
              ))}

            </div>
          )}
          {buttons && (
            <div className="flex gap-2">
              <button
                className="flex w-22 h-9 cursor-pointer hover:bg-green-500 items-center justify-center  rounded-xl px-4 bg-green-600 text-white text-sm "
                onClick={() => {
                  if (onButtonClick) {
                    onButtonClick();
                  }
                  else if (buttons) {
                    navigate(buttons.path)
                  }
                }}
              >
                {buttons.label}
              </button>
            </div>
          )}

        </div>
      </header>
    </>
  );
}