import type { GetImageResult } from "astro"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/shadcn/drawer"

interface OrbDrawerProps {
    title: string
    description: string
    coverImage: GetImageResult
    contentImage: GetImageResult
}

export function OrbDrawer({
    title,
    description,
    coverImage,
    contentImage,
}: OrbDrawerProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="cursor-pointer">
                    <img
                        src={coverImage.src}
                        alt={title}
                        className="rounded-full border-solid"
                        width={64}
                        height={64}
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent className="flex items-center">
                <div className="flex max-w-3xl gap-8">
                    <img
                        src={contentImage.src}
                        alt={title}
                            className="rounded-2xl border-solid border-2 border-primary inset-shadow-2xl inset-shadow-primary"
                        width={256}
                        height={256}
                    />
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="font-heading text-4xl underline decoration-primary decoration-wavy font-bold">{title}</div>
                        <div>{description}</div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
