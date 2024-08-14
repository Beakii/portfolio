import { cn } from "~/lib/utils"

interface TechStackIconProps {
    techUsed: string
    className?: string
}
const TechStackIcon = ({ techUsed, className }: TechStackIconProps) => {
    return (
        <img
            src={`/techstack/${techUsed}.svg`}
            className={cn(
                "flex size-10 items-center justify-center rounded-full ring-2 ring-primary",
                className,
            )}
        />
    )
}

export default TechStackIcon
