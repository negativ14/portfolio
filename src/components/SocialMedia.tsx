import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import CircleButton from "./ui/CircleButton";

export const SocialMedia = () => {
    return (
        <div className="fixed z-30 flex-col gap-y-4 left-10 top-72 hidden md:flex">
            <a href="https://twitter.com/RohitMehta1409" target="_blank" rel="noopener noreferrer">
                <CircleButton svg={<Twitter />} />
            </a>
            <a href="https://github.com/negativ14" target="_blank" rel="noopener noreferrer">
                <CircleButton svg={<Github />} />
            </a>
            <a href="https://linkedin.com/in/rohitmehta14" target="_blank" rel="noopener noreferrer">
                <CircleButton svg={<LinkedIn />} />
            </a>
        </div>
    );
};
