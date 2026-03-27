const DEFAULT_VIEW_COUNTER_KEY = "portfolio:views:preetham-raj.info";

type UpstashResponse<T> = {
  result?: T;
  error?: string;
};

function getCounterConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const key = process.env.VIEW_COUNTER_KEY ?? DEFAULT_VIEW_COUNTER_KEY;

  return {
    enabled: Boolean(url && token),
    key,
    token,
    url: url?.replace(/\/$/, ""),
  };
}

async function upstashRequest<T>(command: string) {
  const config = getCounterConfig();

  if (!config.enabled || !config.url || !config.token) {
    return null;
  }

  const response = await fetch(`${config.url}/${command}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as UpstashResponse<T>;

  if (data.error) {
    return null;
  }

  return data.result ?? null;
}

export async function getViewCount() {
  const config = getCounterConfig();

  if (!config.enabled) {
    return {
      count: null,
      enabled: false,
    };
  }

  const result = await upstashRequest<number | string>(
    `get/${encodeURIComponent(config.key)}`,
  );

  const count =
    typeof result === "number"
      ? result
      : typeof result === "string"
        ? Number(result)
        : null;

  return {
    count: Number.isFinite(count) ? count : 0,
    enabled: true,
  };
}

export async function incrementViewCount() {
  const config = getCounterConfig();

  if (!config.enabled) {
    return {
      count: null,
      enabled: false,
    };
  }

  const result = await upstashRequest<number | string>(
    `incr/${encodeURIComponent(config.key)}`,
  );

  const count =
    typeof result === "number"
      ? result
      : typeof result === "string"
        ? Number(result)
        : null;

  return {
    count: Number.isFinite(count) ? count : 0,
    enabled: true,
  };
}
