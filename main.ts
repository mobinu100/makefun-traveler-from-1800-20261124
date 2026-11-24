import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One analogy, run to the end: the post office.
// A letter crosses the world and its answer returns
// before the tea grows cold — that is the whole picture.
const ENTRY =
  "It is a post office that never sleeps, where a letter sent from London reaches Canton before your tea grows cold, and the answer comes back the same way.";

// Gate: the bounty allows one sentence, at most 200 characters.
// Fail loudly at grade time rather than hand the judge a bad entry.
if (ENTRY.length > 200 || ENTRY.trim().split(/[.?!]\s*/).filter(Boolean).length !== 1) {
  throw new Error("entry must be one sentence of at most 200 characters");
}

const out = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
