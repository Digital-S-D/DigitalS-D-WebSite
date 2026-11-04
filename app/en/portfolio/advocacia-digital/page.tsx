import EnglishCaseStudy from "@/components/sections/EnglishCaseStudy";
import { CASE_STUDIES } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/seo";

const project = CASE_STUDIES["advocacia-digital"];
export const metadata = pageMetadata(
  "/en/portfolio/advocacia-digital/",
  `${project.title} — portfolio case | Digital S&D`,
  project.en.subtitle + " Explore the proposed need, decisions, screenshots and limits of this fictional Digital S&D team demonstration.",
  { url: project.cover, width: 1425, height: 940, alt: `Actual screenshot of the ${project.title} demonstration` },
);

export default function Page() { return <EnglishCaseStudy slug="advocacia-digital" />; }
