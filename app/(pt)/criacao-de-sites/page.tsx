import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
export const metadata = serviceMetadata("website", "pt");
export default function Page() { return <ServicePage kind="website" locale="pt" />; }
