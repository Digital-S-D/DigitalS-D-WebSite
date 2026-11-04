import Template, { metadata as portugueseMetadata } from "@/components/pages/CustomerCarePage";
import { englishMetadata } from "@/lib/seo";
export const metadata = englishMetadata(portugueseMetadata);
export default function Page(){return <Template locale="en" />;}
