import StackIcon from "@/components/StackIcon";
import { primaryStack, secondaryStack } from "@/constants/stack";

export default function Stack() {
  return (
    <main className="w-full border-y shadow-md flex flex-col gap-2 bg-background">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground/80 px-4 py-2 border-b">
        Stack
      </h1>

      <div className="flex flex-col gap-2 border-b">
        <h2 className="font-medium text-sm px-4 pt-2 font-mono text-muted-foreground">
          Primary stack <span className="text-foreground">(Proficient)</span>
        </h2>
        <div className="flex flex-wrap gap-4 px-4 pt-2 pb-4">
          {primaryStack.map((item) => {
            const Icon = item.icon;

            return (
              <StackIcon key={item.id}>
                <Icon />
              </StackIcon>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="font-mono font-medium px-4 py-2 text-muted-foreground text-sm">
          Secondary stack <span className="text-foreground">(Familiar)</span>
        </h2>
        <div className="flex flex-wrap gap-4 px-4 pb-4 py-2">
          {secondaryStack.map((item) => {
            const Icon = item.icon;
            return (
              <StackIcon key={item.id}>
                <Icon />
              </StackIcon>
            );
          })}
        </div>
      </div>
    </main>
  );
}
