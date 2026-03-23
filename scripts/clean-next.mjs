import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const nextDir = join(process.cwd(), ".next");

function cleanWithNode() {
  if (!existsSync(nextDir)) {
    return;
  }

  rmSync(nextDir, {
    recursive: true,
    force: true,
    maxRetries: 5,
    retryDelay: 200,
  });
}

function cleanWithPowerShell() {
  const escapedPath = nextDir.replace(/'/g, "''");
  const command = `if (Test-Path -LiteralPath '${escapedPath}') { Remove-Item -LiteralPath '${escapedPath}' -Recurse -Force -ErrorAction Stop }`;
  const result = spawnSync(
    "powershell.exe",
    ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", command],
    {
      stdio: "pipe",
      encoding: "utf8",
    },
  );

  if (result.status !== 0 && existsSync(nextDir)) {
    throw new Error(result.stderr || result.stdout || "Failed to clean .next");
  }
}

try {
  if (process.platform === "win32") {
    cleanWithPowerShell();
  } else {
    cleanWithNode();
  }
} catch (error) {
  if (process.platform === "win32") {
    cleanWithNode();
  } else {
    throw error;
  }
}

console.log("Cleaned generated .next output.");
