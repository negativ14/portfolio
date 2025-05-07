import { projects } from "@/constants";
import { Card } from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";

export default function Project() {
    return (
        <section id="project" className="mt-16 mb-10 px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Projects" />
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
                    {projects.slice(0, 3).map((pro, index) => (
                        <Card key={index} title={pro.title} link={pro.link} image={pro.image} />
                    ))}
                </div>
            </div>
        </section>
    );
}
