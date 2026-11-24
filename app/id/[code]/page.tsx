import type { Metadata } from "next";
import { loadPublicWorkerId } from "@/lib/worker-id";

type PageProps = {
  params: Promise<{ code: string }>;
};

export const metadata: Metadata = {
  title: "Worker ID",
  robots: { index: false, follow: false },
};

function initials(name: string): string {
  const letters = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
  return letters || "W";
}

function Unavailable() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-6 text-center text-ink">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Instaclean</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Worker ID</h1>
        <p className="mt-3 text-muted">This worker ID could not be verified.</p>
      </div>
    </main>
  );
}

export default async function WorkerIdPage({ params }: PageProps) {
  const { code } = await params;
  const card = await loadPublicWorkerId(code);
  if (!card) return <Unavailable />;

  const note =
    card.statusLabel === "Suspended"
      ? "This ID is suspended. It cannot be used at check-in."
      : card.active
        ? "This ID is live and active."
        : "This ID is not active yet.";

  return (
    <main className="min-h-screen bg-paper px-5 py-8 text-ink">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Instaclean</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Worker ID</h1>
      <article
        className="mt-6 max-w-md rounded-3xl bg-deep p-6 text-nav"
        aria-label={`${card.name}. ${card.idNumber}. ${card.statusLabel}`}
      >
        <div className="flex items-center gap-4">
          {card.photoUrl ? (
            // Profile photo from the public worker record, not a government ID.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={card.photoUrl}
              alt=""
              width={96}
              height={116}
              className="h-[116px] w-24 rounded-2xl object-cover"
            />
          ) : (
            <div className="grid h-[116px] w-24 place-items-center rounded-2xl bg-yellow text-2xl font-bold text-ink">
              {initials(card.name)}
            </div>
          )}
          <div>
            <h2 className="text-3xl font-semibold leading-tight">{card.name}</h2>
            <p className="mt-1 text-mist">{card.role}</p>
            <p
              className={
                card.active
                  ? "mt-3 inline-block rounded-full bg-yellow px-3 py-1 text-sm font-bold text-ink"
                  : "mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-bold text-nav"
              }
            >
              {card.statusLabel}
            </p>
          </div>
        </div>
        <dl className="mt-6 grid grid-cols-3 gap-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-mist">ID number</dt>
            <dd className="mt-1 font-semibold">{card.idNumber}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-mist">Member since</dt>
            <dd className="mt-1 font-semibold">{card.memberSince ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-mist">Background check</dt>
            <dd className="mt-1 font-semibold">{card.backgroundCleared ? "Cleared" : "Pending"}</dd>
          </div>
        </dl>
        <p className="mt-5 text-mist">{note}</p>
      </article>
    </main>
  );
}
