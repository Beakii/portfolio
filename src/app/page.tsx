import { DownloadIcon } from "lucide-react"
import HorizontalRule from "~/components/HorizontalRule"
import MaxWidthWrapper from "~/components/MaxWidthWrapper"
import { Button, buttonVariants } from "~/components/ui/button"
import { TextEffect } from "~/components/ui/TextEffect"

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
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="80"
        >
            {" "}
            <path
                d="M56 270.5C56 256.429 79.5553 218.859 120.902 197.186C162.249 175.512 194.07 164.5 242.113 164.5C274.142 164.5 306.771 175.395 340 197.186"
                stroke="#ffffff"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="16 32"
            ></path>{" "}
            <path
                d="M325.63 129C337.877 172.588 344 195.072 344 196.45C344 198.518 308.436 212.998 292 235"
                stroke="#ffffff"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>{" "}
        </g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                d="M56 270.5C56 256.429 79.5553 218.859 120.902 197.186C162.249 175.512 194.07 164.5 242.113 164.5C274.142 164.5 306.771 175.395 340 197.186"
                stroke="#ffffff"
                stroke-opacity="0.9"
                stroke-width="0.004"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="16 32"
            ></path>{" "}
            <path
                d="M325.63 129C337.877 172.588 344 195.072 344 196.45C344 198.518 308.436 212.998 292 235"
                stroke="#ffffff"
                stroke-opacity="0.9"
                stroke-width="0.004"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>{" "}
        </g>
    </svg>
)

const HomePage = () => {
    return (
        <div className="w-full bg-stone-900 text-white">
            <MaxWidthWrapper>
                <section className="mt-20 flex min-h-[calc(100vh-8.5rem)] flex-col justify-between">
                    <div className="relative pt-32">
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

                        <div className="absolute right-0 top-0 z-50 hidden h-96 w-[30rem] pt-32 lg:block">
                            <div className="relative">
                                <TextEffect
                                    as="p"
                                    per="word"
                                    preset="slide"
                                    className="absolute left-10 top-0"
                                >
                                    {"My cat twig"}
                                </TextEffect>
                                <div className="animate-fade absolute left-10 top-10 -rotate-45">
                                    {Arrow}
                                </div>
                                <img
                                    className="animate-fade absolute right-20 top-20 max-h-64"
                                    src="/twig.png"
                                />
                            </div>
                        </div>

                        <div className="animate-fade mt-20 flex items-center justify-center space-x-5 pt-10">
                            <Button variant={"default"}>Contact me</Button>
                            <Button
                                variant={"ghost"}
                                className="text-zinc-400 hover:bg-stone-900 hover:text-white"
                            >
                                Download CV{" "}
                                <DownloadIcon className="ml-2 size-5" />
                            </Button>
                        </div>
                    </div>

                    <HorizontalRule chevronIcon="down" className="mt-[15%]" />
                </section>

                <section className="mt-20 flex min-h-[100vh] flex-col justify-center">
                    <div className="size-52 bg-red-500"></div>
                </section>
                <section className="mt-20 flex min-h-[100vh] flex-col justify-center">
                    <div className="size-52 bg-red-500"></div>
                </section>
                <section className="mt-20 flex min-h-[100vh] flex-col justify-center">
                    <div className="size-52 bg-red-500"></div>
                </section>
            </MaxWidthWrapper>
        </div>
    )
}

export default HomePage
