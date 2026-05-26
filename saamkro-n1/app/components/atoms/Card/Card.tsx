"use client";
import * as React from "react"

import { cn } from "../..//../lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
    it: {
        src: string | import("next/image").StaticImageData;
        title: string;
        tag: string;
    };
    children: string;
}

const ProjectCard = ({ it, children }: ProjectCardProps) => {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer"
        >

            <motion.div
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.07 },
                }}
                transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                className="relative h-full w-full"
            >
                <Image src={it.src} alt={it.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div
                    variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-neutral-950/80 px-3 py-1.5 backdrop-blur-md"
                >
                    <p className="text-xs font-medium text-white">{it.title}</p>
                </motion.div>
            </motion.div>


            <motion.div
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 flex flex-col justify-center bg-neutral-900/95 p-6"
            >
                <h3 className="text-2xl font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{it.tag}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                    <MapPin className="size-3.5 text-white/50" />
                    <span>{children}</span>
                </div>
                <motion.div
                    variants={{ rest: { width: 0 }, hover: { width: "2.5rem" } }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="mt-5 h-px bg-white/30 origin-left"
                />
            </motion.div>
        </motion.div>
    );
};



function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
                className
            )}
            {...props}
        />
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "flex px-6 items-start",
                className
            )}
            {...props}
        />
    )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("leading-none font-semibold text-white", className)}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props}
        />
    )
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
    ProjectCard
}
