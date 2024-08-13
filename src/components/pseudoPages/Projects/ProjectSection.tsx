import { cn } from "~/lib/utils"
import HorizontalRule from "../../HorizontalRule"
import { InView } from "../../ui/InView"
import Project from "./Project"

const ProjectSection = ({ className }: { className?: string }) => {
    return (
        <section
            className={cn(
                "flex min-h-screen flex-col justify-evenly",
                className,
            )}
        >
            <InView
                className="my-auto"
                variants={{
                    hidden: {
                        opacity: 0,
                        scale: 0.9,
                        filter: "blur(5px)",
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        transition: {
                            duration: 0.5,
                        },
                    },
                }}
            >
                <span className="mb-32 flex justify-center text-3xl">
                    {"My recent projects :)"}
                </span>
                <div className="grid grid-cols-1 place-items-center gap-16 md:grid-cols-2">
                    <Project
                        projectName="BDOdle"
                        projectDescription="A Wordle like game for the community that plays Black Desert Online."
                        technologiesUsed={[
                            "nextjs",
                            "tailwindcss",
                            "typescript",
                            "postgresql",
                        ]}
                        isLive="live"
                        url="https://bdodle.com"
                    />
                    <Project
                        projectName="BDOdle"
                        projectDescription="A Wordle like game for the community that plays Black Desert Online."
                        technologiesUsed={[
                            "nextjs",
                            "tailwindcss",
                            "typescript",
                            "postgresql",
                        ]}
                        isLive="not-live"
                    />
                    <Project
                        projectName="BDOdle"
                        projectDescription="A Wordle like game for the community that plays Black Desert Online."
                        technologiesUsed={[
                            "nextjs",
                            "tailwindcss",
                            "typescript",
                            "postgresql",
                        ]}
                        isLive="live"
                    />
                    <Project
                        projectName="BDOdle"
                        projectDescription="A Wordle like game for the community that plays Black Desert Online."
                        technologiesUsed={[
                            "nextjs",
                            "tailwindcss",
                            "typescript",
                            "postgresql",
                        ]}
                        isLive="live"
                    />
                </div>
            </InView>

            <HorizontalRule chevronIcon="down" />
        </section>
    )
}

export default ProjectSection
