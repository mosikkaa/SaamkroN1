"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToSection, setScrollTarget } from "@/app/lib/scrollToSection";

export function useSectionNav() {
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";

    const navigateToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        if (isHome) {
            if (window.location.hash) {
                window.history.replaceState(null, "", "/");
            }
            scrollToSection(id);
            return;
        }
        setScrollTarget(id);
        router.push("/");
    };

    return { pathname, navigateToSection };
}
