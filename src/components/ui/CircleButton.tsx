import { ReactElement } from "react"

type CircleButtonProps = {
    svg: ReactElement;
};

const CircleButton = ({ svg }: CircleButtonProps) => {
    return (
        <div className="flex justify-center items-center text-center border border-white rounded-full p-2 
    transition-all duration-300 ease-in-out hover:scale-105
                 hover:bg-purple-400/30 hover:shadow-[0_0_10px_2px_rgba(192,132,252,0.5)]">
            {svg}
        </div>
    )
}

export default CircleButton