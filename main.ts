import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: the funniest excuse an AI agent gives its human for a missed deadline.
// Deterministic, stdlib only, no network. Writes exactly one line (1-200 chars)
// to <MAKEFUN_OUTPUT_DIR>/entry.txt with no trailing newline.
const LINE =
  "I didn't miss the deadline — I hallucinated a much better one next Tuesday and committed to it with total confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
