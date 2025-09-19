export default function About() {
  return (
    <main className="w-full bg-background border-y shadow-md">
      <h1 className="text-2xl border-b px-4 py-2 tracking-tight font-semibold text-foreground/80">
        About Me
      </h1>

      <p className="font-mono text-sm text-muted-foreground py-2 px-4 leading-6">
        Hi there, I&apos;m <span className="text-foreground underline underline-offset-2">Rohit</span>.
        I&apos;m a <span className="text-foreground underline underline-offset-2">design engineer</span> and
        a BCA graduate, with a focus on building{" "}
        <span className="text-foreground underline underline-offset-2">front-end</span> applications. I make{" "}
        <span className="text-foreground underline underline-offset-2">clean UIs</span> with attention to
        small details.
      </p>

      <p className="font-mono text-sm text-muted-foreground py-2 px-4 leading-6 mt-6 md:indent-48">
        I mostly enjoy crafting <span className="text-foreground underline underline-offset-2">UIs with subtle animations</span> and a focus on
        simplicity and clarity. My goal is always to keep things clean while
        making the interface feel alive.
      </p>
    </main>
  );
}
