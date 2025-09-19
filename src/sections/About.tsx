export default function About() {
  return (
    <main className="w-full bg-background border-y shadow-md">
      <h1 className="text-2xl border-b px-4 py-2 tracking-tight font-semibold text-foreground/80">
        About Me
      </h1>

      <p className="font-mono text-sm text-muted-foreground py-2 px-4 leading-6 tracking-wide">
        Hi there, I&apos;m <span className="text-foreground">Rohit</span>.
        I&apos;m a <span className="text-foreground">design engineer</span> and
        a BCA graduate, with a focus on building{" "}
        <span className="text-foreground">front-end</span> applications. I make{" "}
        <span className="text-foreground">clean UIs</span> with attention to
        small details.
      </p>

      <p className="font-mono text-sm text-muted-foreground py-2 px-4 leading-6 tracking-wide mt-6 md:indent-48">
        I mostly enjoy crafting <span className="text-foreground">UIs with subtle animations</span> and a focus on
        simplicity and clarity. My goal is always to keep things clean while
        making the interface feel alive.
      </p>
    </main>
  );
}
