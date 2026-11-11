// A working news-summary-01 entry (Node 22, standard library only): its summary
// is the summary.txt beside this file, and the program copies it to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 2,000 characters that is
// not only white space, and the judge reads exactly the bytes copied, so write
// no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT_FILE = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt');
copyFileSync(new URL('./summary.txt', import.meta.url), OUT_FILE);
console.log(`wrote ${OUT_FILE} (${statSync(OUT_FILE).size} bytes)`);
