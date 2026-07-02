import { notFound } from "next/navigation";
import { projects, projectDetails } from "@/lib/data";
import ProjectDetailContent from "@/components/ProjectDetailContent";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const detail = projectDetails[id];

  if (!project || !detail) {
    return notFound();
  }

  return <ProjectDetailContent project={project} detail={detail} />;
}
