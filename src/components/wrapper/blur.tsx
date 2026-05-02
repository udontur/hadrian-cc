import * as React from "react";
import { BlurReveal } from "@/components/ui/blur-reveal.tsx";

export function Reveal({ text }: { text: string }) {
  return <BlurReveal className="text-2xl">{text}</BlurReveal>;
}
