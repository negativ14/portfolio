export default function About() {
  return (
    <main className="w-full bg-background border-y shadow-md">
      <h1 className="text-2xl border-b px-4 py-2 tracking-tight font-semibold text-foreground/80">
        About Me
      </h1>

      <p className="font-mono text-sm text-muted-foreground py-2 px-4 leading-8 tracking-wide">
        Hi there, I&apos;m{" "}
        <span className="text-foreground underline underline-offset-2 font-semibold">
          Rohit
        </span>
        . I&apos;m a{" "}
        <span className="text-foreground underline underline-offset-2 font-semibold">
          design engineer
        </span>{" "}
        and a BCA graduate, with a focus on building{" "}
        <span className="text-foreground underline underline-offset-2 font-semibold">
          front-end
        </span>{" "}
        applications. I make{" "}
        <span className="text-foreground underline underline-offset-2 font-semibold">
          clean UIs
        </span>{" "}
        with{" "}
        <span className="text-foreground underline underline-offset-2 font-semibold">
          subtle animations{" "}
        </span>{" "}
        and attention to small details.
      </p>
    </main>
  );
}
