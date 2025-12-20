import React from "react";
import { Skeleton } from "../ui/skeleton";

const LoadingFallback = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 min-h-0">
        <div className="w-full text-sm lg:w-2/4 bg-white/80 dark:bg-slate-700/60 rounded-lg p-4 ">
          <Skeleton className="h-[calc(100vh-2rem)] w-full" />
        </div>
        <div className="w-full text-sm lg:w-2/4 bg-white/80 dark:bg-slate-700/60 rounded-lg p-4 ">
          <Skeleton className="h-[calc(100vh-2rem)] w-full" />
        </div>
    </div>
  );
};

export default LoadingFallback;
