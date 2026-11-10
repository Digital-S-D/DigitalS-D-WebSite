import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
export const metadata = serviceMetadata("landing", "en");
export default function Page() { return <ServicePage kind="landing" locale="en" />; }
