import Image from "next/image";
import { ReactElement, ReactHTMLElement } from "react"

type ButtonProps = {
    imgSrc?: string;
    icon?: ReactElement;
    alt: string;
    size?: number;
    label: string;
    onClick?: () => void;
};

export const Button = ({ imgSrc, alt, size = 24, label, icon, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 px-4 py-2 border rounded-md relative z-30 transition-all duration-300 ease-in-out hover:scale-105
                 hover:bg-purple-400/10 hover:shadow-[0_0_10px_2px_rgba(192,132,252,0.5)]"
        >
            {/* Render Image if provided */}
            {imgSrc && (
                <Image src={imgSrc} alt={label} width={size} height={size} />
            )}

            {/* Render SVG or ReactElement if provided */}
            {!imgSrc && icon && (
                <span style={{ width: size, height: size }} className="flex items-center">
                    {icon}
                </span>
            )}

            {/* Text Label */}
            <span className="text-base font-medium">{label}</span>
        </button>
    )
}