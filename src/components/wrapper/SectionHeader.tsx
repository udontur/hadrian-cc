import { SlideUpText } from "@/components/shadcn/slide-up-text.tsx"

export function SectionHeader({ text }: { text: string }) {
    return (
        <div className="flex justify-center items-center">
            <SlideUpText
                className="text-5xl font-heading font-bold text-primary mb-12"
                split="characters"
                stagger={0.05}
                inView
            >
                {text}
            </SlideUpText>
        </div>
    )
}
