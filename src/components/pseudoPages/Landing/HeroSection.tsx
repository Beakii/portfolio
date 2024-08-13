import { DownloadIcon } from "lucide-react"
import { Button } from "../../ui/button"
import { TextEffect } from "../../ui/TextEffect"
import HorizontalRule from "../../HorizontalRule"
import { cn } from "~/lib/utils"
import { InView } from "~/components/ui/InView"

const Arrow = (
    <svg
        width="128px"
        height="128px"
        viewBox="0 0 400.00 400.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        transform="matrix(1, 0, 0, -1, 0, 0)rotate(270)"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="80"
        >
            {" "}
            <path
                d="M56 270.5C56 256.429 79.5553 218.859 120.902 197.186C162.249 175.512 194.07 164.5 242.113 164.5C274.142 164.5 306.771 175.395 340 197.186"
                stroke="#ffffff"
                strokeOpacity="0.9"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="16 32"
            ></path>{" "}
            <path
                d="M325.63 129C337.877 172.588 344 195.072 344 196.45C344 198.518 308.436 212.998 292 235"
                stroke="#ffffff"
                strokeOpacity="0.9"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>{" "}
        </g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                d="M56 270.5C56 256.429 79.5553 218.859 120.902 197.186C162.249 175.512 194.07 164.5 242.113 164.5C274.142 164.5 306.771 175.395 340 197.186"
                stroke="#ffffff"
                strokeOpacity="0.9"
                strokeWidth="0.004"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="16 32"
            ></path>{" "}
            <path
                d="M325.63 129C337.877 172.588 344 195.072 344 196.45C344 198.518 308.436 212.998 292 235"
                stroke="#ffffff"
                strokeOpacity="0.9"
                strokeWidth="0.004"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>{" "}
        </g>
    </svg>
)

const HeroSection = ({ className }: { className?: string }) => {
    return (
        <section
            className={cn(
                "flex min-h-screen flex-col justify-evenly",
                className,
            )}
        >
            <div className="relative my-auto">
                <InView
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                            },
                        },
                    }}
                >
                    <TextEffect
                        per="char"
                        preset="scale"
                        className="text-xl tracking-tight"
                    >
                        {"Hello! I'm James :)"}
                    </TextEffect>

                    <TextEffect
                        as="h1"
                        per="char"
                        preset="fade"
                        className="mt-10 text-4xl font-semibold tracking-tight md:text-5xl"
                    >
                        {"Software Developer"}
                    </TextEffect>

                    <TextEffect
                        as="p"
                        per="word"
                        preset="slide"
                        className="my-10 space-y-2 lg:max-w-[50%]"
                    >
                        {
                            "I live in New Zealand and I've been working as a business consultant for more than 3 years. I have decided to focus my career efforts back towards my passion in Software Development. My experience may not be commercial, but please check out my self-driven learning and projects below. :)"
                        }
                    </TextEffect>

                    <div className="absolute -top-[25%] right-0 z-50 hidden h-96 w-[30rem] pt-32 lg:block">
                        <div className="relative">
                            <TextEffect
                                as="p"
                                per="word"
                                preset="slide"
                                className="absolute left-10 top-0"
                            >
                                {"My cat twig"}
                            </TextEffect>
                            <div className="absolute left-10 top-10 -rotate-45 animate-fade">
                                {Arrow}
                            </div>
                            <img
                                className="absolute right-20 top-20 max-h-64 animate-fade"
                                src="/twig.png"
                            />
                        </div>
                    </div>

                    <div className="mt-20 flex animate-fade items-center justify-center space-x-5 pt-10">
                        <Button variant={"default"}>Contact me</Button>
                        <Button
                            variant={"ghost"}
                            className="text-zinc-400 hover:bg-stone-900 hover:text-white"
                        >
                            Download CV <DownloadIcon className="ml-2 size-5" />
                        </Button>
                    </div>
                </InView>
            </div>

            <HorizontalRule chevronIcon="down" />
        </section>
    )
}

export default HeroSection
