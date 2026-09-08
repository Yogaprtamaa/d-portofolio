import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work, Web Development, UI/UX, Full Stack, and Web3 projects by Yoga Pratama.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
