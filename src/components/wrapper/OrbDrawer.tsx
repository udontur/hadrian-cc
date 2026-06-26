import type { GetImageResult } from "astro"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/shadcn/drawer"

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
            <DrawerTrigger asChild className="flex items-center">
                <button
                    className="
                        flex items-center justify-center p-1
                        w-fit cursor-pointer
                        border-solid border-2 border-primary/55 rounded-full
                        hover:border-primary
                        hover:scale-110
                        ease-in-out duration-250
                        "
                >
                    <div className="relative overflow-hidden rounded-full">
                        <img
                            src={coverImage.src}
                            alt={title}
                            className="block rounded-full"
                            width={78}
                            height={78}
                            loading="lazy"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgb(0_0_0_/0.55)]"
                        />
                    </div>
                </button>
            </DrawerTrigger>
            <DrawerContent className="flex items-center">
                <div className="flex max-w-3xl gap-8">
                    <div className="relative size-64 shrink-0 overflow-hidden rounded-2xl border-2 border-solid border-primary">
                        <img
                            src={contentImage.src}
                            alt={title}
                            className="block h-full w-full object-cover"
                            width={256}
                            height={256}
                            loading="lazy"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_36px_rgb(0_0_0_/0.5)]"
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="font-heading text-4xl underline decoration-primary decoration-wavy font-bold">
                            {title}
                        </div>
                        <div>{description}</div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
