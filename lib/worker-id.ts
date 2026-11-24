const WORKER_ID_ORIGIN = "https://api.tryinstaclean.com";
const SLUG_PATTERN = /^[23456789abcdefghjkmnpqrstuvwxyz]{8}$/;

export const WORKER_HOST = "worker.tryinstaclean.com";

export type PublicWorkerId = {
  name: string;
  role: string;
  idNumber: string;
  memberSince: string | null;
  backgroundCleared: boolean;
  active: boolean;
  statusLabel: string;
  photoUrl: string | null;
};

export function normalizeWorkerIdCode(code: string): string | null {
  const slug = code.trim().toLowerCase();
  return SLUG_PATTERN.test(slug) ? slug : null;
}

export function isWorkerIdPath(pathname: string): boolean {
  return pathname === "/id" || pathname.startsWith("/id/");
}

function readPublicWorkerId(value: unknown): PublicWorkerId | null {
  if (!value || typeof value !== "object") return null;
  const row = value as Record<string, unknown>;
  if (typeof row.name !== "string" || typeof row.idNumber !== "string") return null;
  if (typeof row.role !== "string" || typeof row.statusLabel !== "string") return null;

  const photoUrl =
    typeof row.photoUrl === "string" && row.photoUrl.startsWith("https://") ? row.photoUrl : null;

  return {
    name: row.name,
    role: row.role,
    idNumber: row.idNumber,
    memberSince: typeof row.memberSince === "string" ? row.memberSince : null,
    backgroundCleared: row.backgroundCleared === true,
    active: row.active === true,
    statusLabel: row.statusLabel,
    photoUrl,
  };
}

export async function loadPublicWorkerId(code: string): Promise<PublicWorkerId | null> {
  const slug = normalizeWorkerIdCode(code);
  if (!slug) return null;

  const origin = (process.env.MITHRIL_API_URL || WORKER_ID_ORIGIN).replace(/\/$/, "");

  try {
    const response = await fetch(`${origin}/public/worker-ids/${slug}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    return readPublicWorkerId(await response.json());
  } catch {
    return null;
  }
}
