import { BlurReveal } from "@/components/ui/blur-reveal.tsx"

export function Name({
    text,
    className = "",
}: {
    text: string
    className?: string
}) {
    return (
        <div>
            <BlurReveal className={className} speedReveal={0.2} inView>
                {text}
            </BlurReveal>
        </div>
    )
}
