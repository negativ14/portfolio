import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="max-w-3xl flex flex-col mx-auto">
      <nav className="w-full bg-background border-y px-4 py-2.5 flex justify-between items-center gap-4 shadow-md">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-7 rounded-full" />
          <Skeleton className="h-6 w-20" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </nav>

      <main className="w-full bg-background border-y shadow-md">
        <Skeleton className="h-8 w-32 my-2 mx-4" />
        <div className="px-4 py-2 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </main>

      <main className="w-full border-y shadow-md flex flex-col gap-2 bg-background">
        <Skeleton className="h-8 w-20 my-2 mx-4" />
        <div className="flex flex-col gap-2 border-b">
          <Skeleton className="h-4 w-40 my-2 mx-4" />
          <div className="flex flex-wrap gap-4 px-4 pt-2 pb-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="size-10 rounded-lg" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="h-4 w-40 my-2 mx-4" />
          <div className="flex flex-wrap gap-4 px-4 pb-4 py-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="size-10 rounded-lg" />
            ))}
          </div>
        </div>
      </main>

      <main className="w-full border-y bg-background shadow-md animate-pulse">
        <h2 className="text-2xl tracking-tight px-4 py-2 text-foreground/50 border-b font-semibold">
          
        </h2>

        <div className="grid md:grid-cols-2 divide-x divide-y items-stretch">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 flex flex-col gap-2 border-r border-b">
              <div className="h-40 w-full bg-muted rounded-lg" /> 
              <div className="h-4 w-2/3 bg-muted rounded" />
              <div className="h-3 w-1/2 bg-muted rounded" /> 
              <div className="flex gap-2 mt-2">
                <div className="h-6 w-16 bg-muted rounded" />
                <div className="h-6 w-12 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full border-t flex justify-center items-center py-2">
          <div className="h-4 w-20 bg-muted rounded" /> 
        </div>
      </main>
    </div>
  );
}
