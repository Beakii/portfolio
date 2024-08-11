"use server"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, MenuIcon } from "lucide-react"
import { buttonVariants } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const Navbar = async () => {
    return (
        <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-primary bg-stone-950/80 text-white backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="z-40 flex font-semibold">
                        <span className="px-2 text-2xl font-bold tracking-tight text-blue-400">
                            {"<"}
                        </span>
                        <span className="rounded-md bg-primary px-1 text-xl text-white">
                            James
                        </span>
                        <span className="px-1 text-2xl font-bold tracking-tight text-blue-400">
                            {"/>"}
                        </span>
                    </Link>

                    <div className="flex h-full items-center space-x-4">
                        <>
                            <Link
                                href=""
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                    className:
                                        "hidden hover:bg-blue-400 hover:text-white md:flex md:items-center",
                                })}
                            >
                                CV
                            </Link>

                            <div className="hidden h-8 w-px bg-primary md:block" />

                            <Link
                                href=""
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                    className:
                                        "hover:text-semibold hidden border border-primary hover:border-blue-400 hover:bg-blue-400 hover:text-white md:flex md:items-center",
                                })}
                            >
                                Contact
                                <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>

                            <div className="md:hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <MenuIcon className="mr-10 size-8 cursor-pointer" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="flex flex-col space-y-2 border-primary bg-stone-400 py-5">
                                        <Link
                                            href=""
                                            className={buttonVariants({
                                                size: "sm",
                                                variant: "ghost",
                                                className: "",
                                            })}
                                        >
                                            CV
                                        </Link>
                                        <Link
                                            href=""
                                            className={buttonVariants({
                                                size: "sm",
                                                variant: "default",
                                                className: "",
                                            })}
                                        >
                                            Contact
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
