import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import type { GetImageResult } from "astro"

interface OrbDrawerProps {
    title: string
    description: string
    coverImage: GetImageResult
    contentImage: GetImageResult
}

export function OrbDrawer({ title, description, coverImage, contentImage }: OrbDrawerProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button>
                    <img src={coverImage.src} alt={title} width={coverImage.width} height={coverImage.height} />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div>
                    <img src={contentImage.src} alt={title} width={coverImage.width} height={coverImage.height} />
                    <div>
                        <div>{title}</div>
                        <div>{description}</div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
