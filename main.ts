// news-summary-01 entry (Node 22, standard library only). The summary is the
// summary.txt beside this file; the program writes it, byte for byte, to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 2,000 characters that
// is not only white space, and the judge reads exactly the bytes written, so
// the program adds no line end and no extra text of its own.
//
// Verified 2026-11-11: two runs write byte-identical output (1,993 characters).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_FILE = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt');
const summary = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
writeFileSync(OUT_FILE, summary, 'utf8');
console.log(`wrote ${OUT_FILE} (${[...summary].length} characters, ${Buffer.byteLength(summary)} bytes)`);
