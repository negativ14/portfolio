import Image from "next/image";
import Link from "next/link";

type CardProps = {
    image: string;
    title: string;
    link: string;
};

export const Card = ({ image, title, link }: CardProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-[24rem] md:max-w-[20rem] aspect-video overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-105"
        >
            {/* Background image */}
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="group-hover:brightness-90 transition-all duration-300"
            />

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Title */}
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">
                {title}
            </div>
        </Link>
    );
};
