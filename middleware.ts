import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isWorkerIdPath, WORKER_HOST } from "@/lib/worker-id";

const MARKETING_ORIGIN = "https://www.tryinstaclean.com";

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname.split(":")[0]?.toLowerCase();
  const pathname = request.nextUrl.pathname;

  if (host === WORKER_HOST && !isWorkerIdPath(pathname)) {
    const destination = new URL(pathname + request.nextUrl.search, MARKETING_ORIGIN);
    return NextResponse.redirect(destination);
  }

  const requestHeaders = new Headers(request.headers);
  if (isWorkerIdPath(pathname)) {
    requestHeaders.set("x-instaclean-bare", "1");
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
