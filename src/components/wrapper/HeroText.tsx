import { BlurReveal } from "@/components/ui/blur-reveal.tsx"
import { Signature } from "@/components/ui/signature.tsx"
import { SpecialText } from "@/components/ui/special-text.tsx"

export function SignatureName({
    text,
    size,
    color,
    duration,
}: {
    text: string
    size: number
    color: string
    duration: number
}) {
    return (
        <div>
            <Signature
                text={text}
                fontSize={size}
                color={color}
                duration={duration}
                height={size}
                inView
            />
        </div>
    )
}

export function SecondName({
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
