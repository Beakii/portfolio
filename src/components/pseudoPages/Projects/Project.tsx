import { ScanEyeIcon } from "lucide-react"
import Link from "next/link"
import StackIcon from "tech-stack-icons"
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

interface ProjectProps {
    projectName: string
    projectDescription: string
    technologiesUsed: Array<
        "nextjs" | "react" | "typescript" | "tailwindcss" | "postgresql" | "go"
    >
    isLive: "live" | "not-live"
    url?: string
}
const Project = ({
    projectName,
    projectDescription,
    technologiesUsed,
    isLive,
    url,
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
                            ) : (
                                <div className="flex flex-col">
                                    <div className="size-2 rounded-full bg-red-300 ring-1 ring-black blur-[1px]" />
                                    <span>{"Not Live"}</span>
                                </div>
                            )}
                        </span>
                    </div>

                    <div className="flex space-x-4">
                        <div>
                            <Cursor
                                attachToParent
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
                                    src="https://i.pinimg.com/564x/4c/95/69/4c9569ab2928e5ae400a6a34e7c537a0.jpg"
                                    alt="Christian Church, Eastern Europe"
                                    className="size-96"
                                />
                            </Cursor>
                            <Link
                                className={buttonVariants({
                                    variant: "outline",
                                    className:
                                        "border-primary bg-transparent text-zinc-400 hover:cursor-pointer hover:bg-blue-400 hover:text-white",
                                })}
                                href={""}
                            >
                                Visit
                            </Link>
                        </div>
                        <div className="size-10 rounded-full bg-white ring-2 ring-primary">
                            <Link href={""}>
                                <StackIcon
                                    className="object-contain"
                                    name="github"
                                />
                            </Link>
                        </div>
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
                        <div className="size-10 overflow-hidden rounded-full bg-zinc-700 ring-2 ring-primary">
                            <StackIcon className="" key={index} name={tech} />
                        </div>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}

export default Project
