import { NextResponse } from "next/server";

import { getViewCount, incrementViewCount } from "@/lib/view-counter";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode");
    const data =
      mode === "increment" ? await incrementViewCount() : await getViewCount();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch {
    return NextResponse.json(
      {
        count: null,
        enabled: false,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
        status: 200,
      },
    );
  }
}
