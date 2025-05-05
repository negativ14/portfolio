export const Footer = () => {
    return (
        <footer className="mt-8 my-6 px-4">
            {/* Gradient divider line */}
            <div
                className="h-[2px] w-full mb-6"
                style={{
                    background: "linear-gradient(to right, transparent 0%, white 50%, transparent 100%)"
                }}
            ></div>

            
            <div className="text-center text-gray-300 text-lg">
                <h1>Thanks for visiting...</h1>
            </div>
        </footer>
    );
};
