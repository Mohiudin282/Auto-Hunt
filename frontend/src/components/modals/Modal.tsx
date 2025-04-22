import { ReactNode } from "react";

interface Prop {
    children: ReactNode;
    onClose?: () => void;
}

export function Modal({ children, onClose }: Prop) {
    return (
        <div className="absolute flex h-full w-full justify-center items-center bg-opacity-50 backdrop-blur-md fixed inset-0 z-10"
            onClick={onClose}
        >
            <div onClick={(e) => {
                //e.preventDefault();
                e.stopPropagation();
            }}>
                {children}
            </div>
        </div>
    );
}