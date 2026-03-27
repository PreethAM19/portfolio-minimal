"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio:view-counter:counted";

type ViewCounterResponse = {
  count: number | null;
  enabled: boolean;
};

export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadCount() {
      try {
        const hasCounted =
          typeof window !== "undefined" &&
          window.sessionStorage.getItem(SESSION_KEY) === "true";

        const mode = hasCounted ? "read" : "increment";
        const response = await fetch(`/api/views?mode=${mode}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as ViewCounterResponse;

        if (!isMounted || !data.enabled || typeof data.count !== "number") {
          if (isMounted) {
            setEnabled(Boolean(data.enabled));
          }

          return;
        }

        setEnabled(true);
        setCount(data.count);

        if (!hasCounted) {
          window.sessionStorage.setItem(SESSION_KEY, "true");
        }
      } catch {
        if (isMounted) {
          setEnabled(false);
        }
      }
    }

    void loadCount();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!enabled || count === null) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-4 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.34em] text-white/[0.34] sm:pt-6">
      <span>Views</span>
      <span className="font-medium text-white/[0.52]">
        {new Intl.NumberFormat("en-US").format(count)}
      </span>
    </div>
  );
}
