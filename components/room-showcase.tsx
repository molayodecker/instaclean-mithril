"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/lib/content";

const rooms = services.slice(0, 3);

export function RoomShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-room]"));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.room);
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.2, 0.5, 0.8] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-14 grid gap-16 md:mt-4 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-5">
        {rooms.map((room, index) => (
          <article key={room.slug} data-room={index} className="flex flex-col justify-center gap-5 md:min-h-[78vh]">
            <div className="overflow-hidden rounded-2xl md:hidden">
              <img src={room.image} alt={room.alt} className="aspect-[4/5] w-full object-cover" style={{ objectPosition: room.position }} />
            </div>
            <p className={`text-base font-semibold transition-colors duration-500 ${active === index ? "text-ink" : "text-muted md:text-ink"}`}>
              {room.room}
            </p>
            <h3 className="text-balance text-[2rem] font-bold leading-[1.05] tracking-[-0.025em] text-ink md:text-5xl md:leading-none">
              {room.title}
            </h3>
            <p className="max-w-md text-lg leading-relaxed text-muted">{room.summary}</p>
            <Link href={room.href} className="w-fit font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-ink">
              {room.link}
            </Link>
          </article>
        ))}
      </div>
      <div className="hidden md:col-span-7 md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center py-24">
          <nav aria-label="Rooms" className="mb-5 flex gap-2">
            {rooms.map((room, index) => (
              <button
                key={room.slug}
                type="button"
                aria-current={active === index ? "true" : undefined}
                onClick={() => {
                  setActive(index);
                  document.querySelector<HTMLElement>(`[data-room="${index}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  active === index ? "border-navy bg-navy text-white" : "border-line bg-white text-muted hover:border-navy hover:text-ink"
                }`}
              >
                {room.room}
              </button>
            ))}
          </nav>
          <div className="relative h-[min(72vh,760px)] w-full overflow-hidden rounded-2xl bg-line">
            {rooms.map((room, index) => (
              <img
                key={room.slug}
                src={room.image}
                alt={index === active ? room.alt : ""}
                aria-hidden={index !== active}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out ${
                  active === index ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                }`}
                style={{ objectPosition: room.position }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
