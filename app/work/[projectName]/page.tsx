import { workLists } from "@/data";
import { notFound } from "next/navigation";
import Project from "@/components/Project";

const allowedSlugs = workLists.map((route) => encodeURIComponent(route.name));

export default async function Page({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const slug = (await params).projectName;

  if (!allowedSlugs.includes(slug)) {
    notFound();
    return null;
  }

  const target = workLists.filter(
    (data) => data.name === decodeURIComponent(slug)
  );

  return (
    <div className="relative top-[156px] mx-auto max-w-7xl">
      <div className="w-full">
        <Project projectName={decodeURIComponent(slug)} />
      </div>
    </div>
  );
}
