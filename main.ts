import { writeFileSync, mkdirSync } from "node:fs";
import * as path from "node:path";

const LINE = "For a fast promotion, reply-all to your CEO correcting their grammar, then follow up hourly until they acknowledge your attention to detail.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(path.join(outputDir, "entry.txt"), LINE, { encoding: "utf8" });
