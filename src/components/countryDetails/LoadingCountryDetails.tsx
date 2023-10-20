import { Skeleton } from "../ui/skeleton";

export default function LoadingCountryDetails() {
  return (
    <div className="p-2">
      <Skeleton className="aspect-[133/80] w-full max-w-sm" />
      <Skeleton className="my-10 h-8 w-36" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-5 w-56" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-28" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-44" />
        </div>
      </div>
    </div>
  );
}
