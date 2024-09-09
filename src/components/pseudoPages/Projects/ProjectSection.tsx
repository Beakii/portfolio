import { cn } from "~/lib/utils"
import HorizontalRule from "../../HorizontalRule"
import { InView } from "../../ui/InView"
import Project from "./Project"

const ProjectSection = ({ className }: { className?: string }) => {
    return (
        <section
            className={cn(
                "flex min-h-screen flex-col justify-center",
                className,
            )}
        >
            <InView
                className="my-auto pt-[3.5rem] md:pt-0"
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
                <span className="mb-10 flex justify-center pt-10 text-xl md:mb-32 md:text-3xl">
                    {"My recent projects :)"}
                </span>
                <div className="grid grid-cols-1 place-items-center gap-16 md:grid-cols-2">
                    <Project
                        projectName="Casetum"
                        projectDescription="A mock e-commerce site for a fictional company that sells phone cases."
                        technologiesUsed={[
                            "nextjs2",
                            "tailwindcss",
                            "typescript",
                            "postgresql",
                            "nextauth",
                            "prisma",
                            "reactquery",
                            "stripe",
                        ]}
                        isLive="live"
                        url="https://casetum.vercel.app"
                        previewImage="/previews/casetum-preview.png"
                        githubUrl="https://github.com/Beakii/next-storefront"
                    />
                    <Project
                        projectName="BDOdle"
                        projectDescription="A Wordle like game for the community that plays Black Desert Online."
                        technologiesUsed={[
                            "nextjs2",
                            "tailwindcss",
                            "typescript",
                            "postgresql",
                            "nextauth",
                            "drizzle",
                        ]}
                        isLive="live"
                        url="https://bdodle.com"
                        previewImage="/previews/bdodle-preview.png"
                        githubUrl="https://github.com/Beakii/bdodle"
                    />
                    <Project
                        projectName="Simple Game Engine"
                        projectDescription="A simple game engine built in C/C++ and DirectX 12 to learn and explore how game engines work."
                        technologiesUsed={["cpp", "dx12"]}
                        isLive="in-progress"
                        previewImage="/previews/no-preview.png"
                        githubUrl="https://github.com/Beakii/cpp-gameengine-learning"
                    />
                    <Project
                        projectName="BeakieBot"
                        projectDescription="A twitch bot specifically for integrating with 7tv via channel point redeems."
                        technologiesUsed={[
                            "reactjs",
                            "tailwindcss",
                            "csharp",
                            "mssql",
                        ]}
                        isLive="in-progress"
                        url="https://beakiebot-client.vercel.app/"
                        previewImage="/previews/beakiebot-preview.png"
                        githubUrl="https://github.com/Beakii/beakiebot-client"
                    />
                </div>
            </InView>
        </section>
    )
}

export default ProjectSection
