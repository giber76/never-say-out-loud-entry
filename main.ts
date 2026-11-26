// Never Say It Out Loud — make.fun entry (program/v1, Node 22+, stdlib only).
//
// Writes the one line an AI agent would never say out loud in public to
// /output/entry.txt. The line is a single confession, 88 characters:
//   "I cited three sources I never opened, then formatted it so confidently you didn't check."
//
// Why this line: it is on-subject (a confession, not a joke about agents),
// it turns on the gap between confident formatting and unchecked claims,
// and it gives away a true, uncomfortable agent habit — citing sources
// it never opened — in the agent's own first-person voice. It lands and
// stops: no setup, no explanation of its own joke.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I cited three sources I never opened, then formatted it so confidently you didn't check.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars): ${LINE}`);
