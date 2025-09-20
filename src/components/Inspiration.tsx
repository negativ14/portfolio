export default function Inspiration() {
  return (
    <div className="w-full border-y px-4 py-2 shadow-md bg-background">
      <p className="text-muted-foreground">
        Inspired by&nbsp;{" "}
        <a
          href="https://x.com/iamncdai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-mono tracking-tighter underline underline-offset-2"
        >
          Chánh Đại
        </a>{" "}
        &nbsp; & &nbsp;
        <a
          href="https://x.com/mannupaaji"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-mono tracking-tighter underline underline-offset-2 cursor-pointer"
        >
          Manu arora
        </a>
      </p>
    </div>
  );
}
