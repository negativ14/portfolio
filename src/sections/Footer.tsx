import XIcon from "@/assets/icons/XIcon";

export default function Footer() {
  return (
    <footer className="w-full border flex justify-between items-center px-4 py-2 max-w-4xl mx-auto bg-background">
      <p className="text-muted-foreground">
        Designed and Developed by <span className="text-foreground">Rohit</span>
        .
      </p>
      <a
        href="https://x.com/RohitMehta1409"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center p-2  transition-all duration-300 active:scale-[0.8] cursor-pointer"
      >
        <XIcon className="h-4 w-auto text-foreground" />
      </a>
    </footer>
  );
}
