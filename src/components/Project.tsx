import { projects } from "@/constants";
import { Card } from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";

export default function Project() {
    return (
        <section id="project" className="mt-16 mb-10">

            <SectionHeading title="Projects" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-y-10 md:gap-y-12 justify-items-center md:px-42">
                {projects.map((pro, index) => (<Card key={index} title={pro.title} link={pro.link} image={pro.image} />))}
            </div>

        </section>
    );
}
