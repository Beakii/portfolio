import { cn } from "~/lib/utils"

const ProjectSection = ({ className }: { className?: string }) => {
    return (
        <section
            className={cn(
                "mt-20 flex min-h-[100vh] flex-col justify-center",
                className,
            )}
        >
            <div className="size-52 bg-red-500"></div>
        </section>
    )
}

export default ProjectSection
