export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-stone-200/80 rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.8s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent ${className}`}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="w-full min-h-[75vh] pt-36 pb-24 px-6 md:px-16 flex flex-col items-center justify-center bg-stone-100/60 relative">
      <Skeleton className="w-24 h-6 mb-6 rounded-full" />
      <Skeleton className="w-3/4 max-w-2xl h-14 md:h-18 mb-4 rounded-2xl" />
      <Skeleton className="w-1/2 max-w-md h-6 mb-8 rounded-lg" />
      <Skeleton className="w-44 h-12 rounded-full" />
    </div>
  );
}

export function CardGridSkeleton() {
  return (
    <div className="w-full py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-4">
            <Skeleton className="w-full aspect-[3/4] rounded-[2rem]" />
            <Skeleton className="w-1/3 h-4 rounded-md" />
            <Skeleton className="w-2/3 h-6 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-6 flex flex-col gap-6">
      <Skeleton className="w-40 h-8 rounded-lg" />
      <Skeleton className="w-full h-4 rounded" />
      <Skeleton className="w-11/12 h-4 rounded" />
      <Skeleton className="w-4/5 h-4 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <Skeleton className="w-full h-64 rounded-2xl" />
        <div className="flex flex-col gap-4 justify-center">
          <Skeleton className="w-3/4 h-8 rounded-lg" />
          <Skeleton className="w-full h-4 rounded" />
          <Skeleton className="w-full h-4 rounded" />
          <Skeleton className="w-2/3 h-4 rounded" />
          <Skeleton className="w-36 h-10 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
}

export function TimingsSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6">
      <Skeleton className="w-56 h-10 mb-8 mx-auto rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-28 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export default function PageSkeleton() {
  return (
    <div className="w-full min-h-screen pt-[88px] flex flex-col bg-white">
      <HeroSkeleton />
      <CardGridSkeleton />
      <ContentSkeleton />
    </div>
  );
}
