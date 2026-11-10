import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
export const metadata = serviceMetadata("landing", "pt");
export default function Page() { return <ServicePage kind="landing" locale="pt" />; }
