import { cn } from "~/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

interface HorizontalRuleProps {
    className?: string
    chevronIcon?: "up" | "down"
}
const HorizontalRule = ({ className, chevronIcon }: HorizontalRuleProps) => {
    return (
        <div
            className={cn(
                "hidden h-10 animate-fade cursor-pointer flex-col md:flex",
                className,
            )}
        >
            <div className="relative animate-pulse">
                <div className="h-[2px] w-full bg-primary"></div>
                {chevronIcon === "up" && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary hover:bg-blue-400">
                        <ChevronUpIcon className="size-10" />
                    </div>
                )}
                {chevronIcon === "down" && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary hover:bg-blue-400">
                        <ChevronDownIcon className="size-10" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HorizontalRule
