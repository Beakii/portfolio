import Link from "next/link"
import TechStackIcon from "~/components/TechStackIcon"
import { buttonVariants } from "~/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Cursor } from "~/components/ui/Cursor"
import { TECH_STACK } from "~/lib/types"

interface ProjectProps {
    projectName: string
    projectDescription: string
    technologiesUsed: TECH_STACK[]
    isLive: "live" | "not-live" | "in-progress"
    url?: string
    githubUrl?: string
    previewImage?: string
}
const Project = ({
    projectName,
    projectDescription,
    technologiesUsed,
    isLive,
    url,
    githubUrl,
    previewImage,
}: ProjectProps) => {
    return (
        <Card className="border-blue-400 bg-stone-800 text-white">
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <span className="flex items-center justify-center">
                            {isLive === "live" ? (
                                <div className="flex flex-col">
                                    <div className="size-2 rounded-full bg-green-300 ring-1 ring-black blur-[1px]" />
                                    <span>{"Live"}</span>
                                </div>
                            ) : null}
                            {isLive === "not-live" ? (
                                <div className="flex flex-col">
                                    <div className="size-2 rounded-full bg-red-300 ring-1 ring-black blur-[1px]" />
                                    <span>{"Not Live"}</span>
                                </div>
                            ) : null}
                            {isLive === "in-progress" ? (
                                <div className="flex flex-col">
                                    <div className="size-2 rounded-full bg-yellow-300 ring-1 ring-black blur-[1px]" />
                                    <span>{"In Progress"}</span>
                                </div>
                            ) : null}
                        </span>
                    </div>

                    <div className="flex space-x-4">
                        <div>
                            <Cursor
                                attachToParent={true}
                                variants={{
                                    initial: {
                                        height: 0,
                                        opacity: 0,
                                        scale: 0.3,
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1,
                                        scale: 1,
                                    },
                                    exit: { height: 0, opacity: 0, scale: 0.3 },
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.3,
                                    bounce: 0.1,
                                }}
                                className="overflow-hidden"
                                springConfig={{
                                    bounce: 0.01,
                                }}
                            >
                                <img
                                    src={
                                        previewImage ??
                                        "/previews/no-preview.png"
                                    }
                                    alt="Preview image of the website"
                                    className="size-96"
                                />
                            </Cursor>
                            <Link
                                href={url ?? ""}
                                className={buttonVariants({
                                    variant: "outline",
                                    className:
                                        "border-primary bg-transparent text-zinc-400 hover:cursor-pointer hover:bg-blue-400 hover:text-white",
                                })}
                            >
                                Visit
                            </Link>
                        </div>
                        <Link href={githubUrl ?? ""}>
                            <TechStackIcon
                                techUsed="github"
                                className="hover:brightness-125"
                            />
                        </Link>
                    </div>
                </div>

                <CardTitle>
                    <span>{projectName}</span>
                </CardTitle>
                <CardDescription>
                    <span>{projectDescription}</span>
                </CardDescription>
            </CardHeader>

            <CardContent></CardContent>

            <CardFooter>
                <div className="flex w-full justify-evenly">
                    {technologiesUsed.map((tech, index) => (
                        <div
                            key={tech}
                            className="size-10 overflow-hidden rounded-full bg-zinc-700 ring-2 ring-primary"
                        >
                            <TechStackIcon
                                className="hover:cursor-help hover:brightness-125"
                                key={index}
                                techUsed={tech}
                            />
                        </div>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}

export default Project
