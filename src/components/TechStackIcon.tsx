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
}
const TechStackIcon = ({ techUsed, className }: TechStackIconProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <img
                        src={`/techstack/${techUsed}.svg`}
                        className={cn(
                            "flex size-10 items-center justify-center rounded-full ring-2 ring-primary",
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
