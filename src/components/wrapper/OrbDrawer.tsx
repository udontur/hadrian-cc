import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

interface OrbDrawerProps {
    title: string
    description: string
    image: string
}

export function OrbDrawer({ image, title, description }: OrbDrawerProps) {
    const src = `/image/${image}`
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button>
                    <img src={src} alt={title} width={64} height={64} />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div>
                    <img src={src} alt={title} width={256} height={256} />
                    <div>
                        <div>{title}</div>
                        <div>{description}</div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
