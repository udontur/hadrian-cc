import { BlurReveal } from "@/components/ui/blur-reveal.tsx";

export function SectionHeader({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center">
      <BlurReveal
        className="text-5xl font-heading font-bold"
        speedReveal={1.5}
        inView
      >
        {text}
      </BlurReveal>
    </div>
  )
}
