import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

export default function SkeletonCard() {
  return (
    <>
      <Card className="group relative mx-auto w-full max-w-xs overflow-hidden shadow-lg transition-transform hover:scale-[1.025]">
        <CardHeader>
          <Skeleton className="aspect-[133/80]  rounded-none object-cover" />
        </CardHeader>

        <CardContent className="py-4">
          <CardTitle className="py-5">
            <Skeleton className="h-8 w-full" />
          </CardTitle>
          <div className="flex flex-col gap-2 ">
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-3/5" />
            <Skeleton className="h-5 w-5/6" />
          </div>
        </CardContent>
        <CardFooter className="py-4" />
      </Card>
    </>
  );
}
