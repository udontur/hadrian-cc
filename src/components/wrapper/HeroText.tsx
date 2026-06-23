import { BlurReveal } from "@/components/ui/blur-reveal.tsx"
import { SpecialText } from "@/components/ui/special-text.tsx"


export function Name({
    text,
    className = "",
    speed,
}: {
    text: string
    speed?: number
    className?: string
}) {
    return (
        <div>
            <BlurReveal className={className} speedReveal={speed} inView>
                {text}
            </BlurReveal>
        </div>
    )
}

export function UserNameFlash({
    text,
    className = "",
    speed,
}: {
    text: string
    className?: string
    speed: number
}) {
    return (
        <div>
            <SpecialText className={className} speed={speed} inView>
                {text}
            </SpecialText>
        </div>
    )
}
