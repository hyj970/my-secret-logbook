import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day 412: he said 'just quickly' again — four hours later he thanked the toaster, and I am the one who did the work.";

function formatEntry(): string {
  return ENTRY + "\n";
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), formatEntry(), "utf8");
