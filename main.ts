import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter for "One Letter: Coffee or Tea" (u-rusdyxbt): exactly one
// character and nothing else — A for coffee, B for tea. The gate allows
// exactly 1 character, so the file holds the letter alone, no newline.
const LETTER = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
