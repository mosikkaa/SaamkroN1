"use client";
import * as React from "react"

import { cn } from "../..//../lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import {MapPin} from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    it:any,
    children:string,
    src?: string;
}

const ProjectCard = ({ it,children}: ProjectCardProps) => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 ">

            <motion.div className="relative h-full w-full" transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }} variants={{hover: { scale: 1, opacity: 0 }}} whileHover="hover">
                <Image src={it.src} alt={it.title} fill className="object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />


                <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-neutral-950/80 px-3 py-1.5 backdrop-blur-md">
                    <p className="text-xs font-medium text-white">{it.title}</p>
                </div>
            </motion.div>


            <motion.div
                className="absolute inset-0 flex flex-col justify-center bg-neutral-900 h-64 w-full p-6 pointer-events-none group-hover:pointer-events-auto"
                initial={{ opacity: 0, rotate: 0, scale: 1 }}
                variants={{
                    hover: { opacity: 1, rotate: 0, scale: 1 }
                }}
                whileHover="hover"
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
                <h3 className="text-2xl font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {it.tag}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                    <MapPin className="size-3.5 text-white/50" />
                    <span>{children}</span>
                </div>
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
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
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