"use client"
import type { ReactNode } from "react"
import type { Variant, UseInViewOptions, Transition } from "framer-motion"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface InViewProps {
    children: ReactNode
    variants?: {
        hidden: Variant
        visible: Variant
    }
    transition?: Transition
    viewOptions?: UseInViewOptions
    className?: string
}

const defaultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export function InView({
    children,
    variants = defaultVariants,
    transition,
    viewOptions,
    className,
}: InViewProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewOptions)

    return (
        <motion.div
            className={className}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}
