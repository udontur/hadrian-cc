import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function OrbDrawerContent(image: string, title: string, description: string) {
    return (
        <div>
            <div>{image}</div>
            <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
        </div>
    )
}
