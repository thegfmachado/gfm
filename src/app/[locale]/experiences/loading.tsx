import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <Skeleton className="h-8 w-48 rounded-md" />
        <div className="flex flex-col gap-10">
          {Array.from({ length: 3 }).map((_, listIndex) => (
            <div key={listIndex} className="space-y-3">
              <div className="flex gap-4 items-center">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-6 w-32 rounded-md" />
              </div>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-4">
                    <Skeleton className="h-4 w-3/4 rounded-md" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
