import { cn, techStackMapper } from "~/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip"
import { TECH_STACK } from "~/lib/types"

interface TechStackIconProps {
    techUsed: TECH_STACK
    className?: string
    staticIcon?: boolean
}
const TechStackIcon = ({
    techUsed,
    className,
    staticIcon,
}: TechStackIconProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger
                    className={cn(
                        "flex overflow-hidden rounded-full bg-zinc-700 ring-2 ring-primary md:size-10",
                        {
                            ["size-8"]: !staticIcon,
                            ["size-10"]: staticIcon,
                        },
                    )}
                >
                    <img
                        src={`/techstack/${techUsed}.svg`}
                        className={cn(
                            "hover:cursor-help hover:brightness-125",
                            className,
                        )}
                    />
                </TooltipTrigger>

                <TooltipContent>{techStackMapper(techUsed)}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TechStackIcon
