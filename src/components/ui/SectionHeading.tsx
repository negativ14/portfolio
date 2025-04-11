export default function SectionHeading({ title }: { title: string }) {
    return (
        <div className="relative w-fit mx-auto mb-16 group">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent text-center transition-all duration-300 ease-in-out group-hover:scale-105">
                {title}
            </h2>
            <div
                className="h-[2px] mt-4 origin-center"
                style={{
                    transform: "scaleX(2)",
                    background: "linear-gradient(to right, transparent 10%, white 50%, transparent 90%)",
                }}
            ></div>
        </div>
    );
}
