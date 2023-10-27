import SkeletonCard from "./SkeletonCard";

export default function SkeletonList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 px-4 py-4 ">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
