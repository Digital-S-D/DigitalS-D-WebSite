"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICE_OPTIONS } from "@/lib/constants";

// Mantém o interesse escolhido no CTA também em navegações dentro da Home.
export function ContactServiceIntent({ onSelect }: { onSelect: (service: string) => void }) {
  const searchParams = useSearchParams();
  const service = searchParams.get("servico");
  useEffect(() => {
    if (service && SERVICE_OPTIONS.slice(1).includes(service)) onSelect(service);
  }, [service, onSelect]);
  return null;
}
