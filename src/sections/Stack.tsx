export default function Stack() {
  return (
    <main className="w-full border-y shadow-md flex flex-col gap-2 bg-background">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground/80 px-4 py-2 border-b">
        Stack
      </h1>

      <div className="flex flex-col gap-2 border-b">
        <h2 className="font-medium px-4 py-2 font-mono text-muted-foreground">
          Primary stack (Proficient)
        </h2>
      </div>

      <div>
        <h2 className="font-mono font-medium px-4 py-2 text-muted-foreground">
          Secondary stack (Familiar)
        </h2>
      </div>
    </main>
  );
}
