import { twMerge } from "tailwind-merge"

interface Prop{
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export function Card({title, children, className}: Prop){
    return(
        <div className={twMerge("bg-white p-8 rounded-lg w-fit w-height",
        className)}>
            {title && <div className="text-lg font-semibold mb-2">{title}</div>}
            {children}
        </div>
    )
}