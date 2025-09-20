import Inspiration from "@/components/Inspiration";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Project from "@/sections/Project";
import Stack from "@/sections/Stack";

export default function Home() {
  return (
    <main
      className={cn(
        "max-w-3xl mx-auto bg-neutral-100 dark:bg-neutral-900 border-x",
        "bg-[radial-gradient(var(--color-neutral-200)_1.2px,transparent_1px)] dark:bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "flex flex-col gap-4",
        "selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black relative"
      )}
    >
      <Header>
        <Navbar />
      </Header>
      <About />
      <Stack />
      <Project />
      <Contact />
      <Inspiration />
      <Footer />
    </main>
  );
}
