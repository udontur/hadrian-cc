import { BlurReveal } from "@/components/shadcn/blur-reveal.tsx"

interface NameProps {
    text: string
    className: string
}

export function Name({ text, className = "" }: NameProps) {
    return (
        <div>
            <BlurReveal className={className} speedReveal={0.1} inView>
                {text}
            </BlurReveal>
        </div>
    )
}
