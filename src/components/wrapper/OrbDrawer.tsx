import type { GetImageResult } from "astro"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

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
                <button>
                    <img
                        src={coverImage.src}
                        alt={title}
                        width={64}
                        height={64}
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div>
                    <img
                        src={contentImage.src}
                        alt={title}
                        width={256}
                        height={256}
                    />
                    <div>
                        <div>{title}</div>
                        <div>{description}</div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
