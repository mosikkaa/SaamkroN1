import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-950 px-4 text-center text-white">
            <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">404</p>
            <h1 className="text-4xl font-black sm:text-5xl">Page not found</h1>
            <p className="max-w-sm text-neutral-400">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-2 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
                ← Back to Home
            </Link>
        </main>
    );
}
