
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const FeedbackSkeleton = ({ pinned }: { pinned: boolean }) => (
  <div className="flex gap-4">
    <Skeleton className="w-14 h-14 rounded-full" />

    <div className="flex flex-col gap-2 grow">
      {pinned && (
        <div className="flex gap-1 items-center">
          <Skeleton className="w-4 h-3.5" />
          <Skeleton className="w-11 h-3.5" />
        </div>
      )}

      <div className="flex gap-2 items-center">
        <Skeleton className="w-28 h-5" />
        <Skeleton className="w-1 h-1 rounded-full" />
        <Skeleton className="w-16 h-3" />
      </div>

      <div className="mt-1 flex flex-col gap-1">
        <Skeleton className="w-3/5 h-4" />
        <Skeleton className="w-3/5 h-4" />
      </div>
    </div>
  </div>
);

export default function Loading() {
  const arrayLength = 3;

  return (
    <section className="container-app flex flex-col gap-4">
      {Array.from({ length: arrayLength }).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          {<FeedbackSkeleton pinned={index === 0} />}
          {index !== arrayLength - 1 && <Separator />}
        </div>
      ))}
    </section>
  );
}
