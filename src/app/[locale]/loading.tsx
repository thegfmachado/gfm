import * as React from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <Skeleton className="h-8 w-48 rounded-md" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full rounded-md" />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-48 rounded-md" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-16 w-32 rounded-tl-2xl rounded-br-2xl"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-48 rounded-md" />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 2 }).map((_, listIndex) => (
            <div key={listIndex} className="space-y-3">
              <Skeleton className="h-6 w-32 rounded-md" />
              <ul className="space-y-2">
                {Array.from({ length: 5 }).map((_, itemIndex) => (
                  <li key={itemIndex}>
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
};
