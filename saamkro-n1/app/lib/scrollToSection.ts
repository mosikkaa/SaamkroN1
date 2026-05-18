export const SCROLL_TARGET_KEY = "scrollTarget";

export function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (!element) return false;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
    });

    return true;
}

export function setScrollTarget(id: string) {
    sessionStorage.setItem(SCROLL_TARGET_KEY, id);
}

export function scrollToPendingTarget(): boolean {
    const id = sessionStorage.getItem(SCROLL_TARGET_KEY);
    if (!id) return false;

    const scrolled = scrollToSection(id);
    if (scrolled) {
        sessionStorage.removeItem(SCROLL_TARGET_KEY);
    }

    return scrolled;
}
