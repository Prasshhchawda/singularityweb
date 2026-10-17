import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Singularity" },
      { name: "description", content: "search your niche bussines" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [showSecond, setShowSecond] = useState(false);
  const secondRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showSecond) {
      secondRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showSecond]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSecond(query.trim().toLowerCase().includes("clothing brand"));
  };

  const backToSingularity = () => {
    setShowSecond(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="h-1 bar-brand" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-12">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border bg-card font-display text-xs font-semibold">
            logo
          </div>
          <nav className="flex gap-10 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary">about</a>
            <a href="#contact" className="hover:text-primary">contact</a>
          </nav>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
          </svg>
        </div>
      </header>

      <section className="relative flex min-h-[78vh] flex-col items-center justify-center px-6">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <h1 className="relative font-display text-6xl font-semibold tracking-tight md:text-8xl text-brand-gradient">
          Singularity
        </h1>

        <form
          onSubmit={submit}
          className="relative mt-10 flex w-full max-w-xl items-center gap-3 rounded-full border bg-background px-5 py-3.5 shadow-soft focus-within:ring-4 focus-within:ring-ring"
        >
          <span aria-hidden="true">☰</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search your niche bussines"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <span aria-hidden="true">⌕</span>
        </form>
      </section>

      {showSecond && (
        <section ref={secondRef} className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl border bg-card p-10 md:p-14">
            <button
              type="button"
              onClick={backToSingularity}
              aria-label="back to singularity"
              className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border bg-background"
            >
              ←
            </button>
            <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight">
              Clothing<br />brand
            </h2>
            <p className="mt-6 max-w-xs text-lg leading-relaxed text-muted-foreground">
              download your persnal ai agent that ives in your computer
            </p>
            <div className="mt-8 inline-flex flex-col items-center gap-2">
              <a href="#" className="flex h-12 w-32 items-center justify-center rounded-xl bg-foreground text-background">
                ↓
              </a>
              <span className="text-sm font-medium">from here</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
