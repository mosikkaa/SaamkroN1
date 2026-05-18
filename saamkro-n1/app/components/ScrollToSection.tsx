"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToPendingTarget } from "@/app/lib/scrollToSection";

export default function ScrollToSection() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== "/") return;

        if (window.location.hash) {
            window.history.replaceState(null, "", "/");
        }

        const delays = [0, 50, 150, 300, 600];
        const timers = delays.map((delay) =>
            setTimeout(() => scrollToPendingTarget(), delay)
        );

        return () => timers.forEach(clearTimeout);
    }, [pathname]);

    return null;
}
