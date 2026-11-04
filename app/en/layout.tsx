import DocumentLayout from "@/components/layout/DocumentLayout";
export { metadata } from "@/components/layout/DocumentLayout";
export default function Layout({children}:{children:React.ReactNode}){return <DocumentLayout locale="en">{children}</DocumentLayout>;}
