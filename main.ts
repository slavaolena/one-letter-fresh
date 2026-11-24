// One Letter for Your Day entry (Node 22, standard library only)
import { mkdirSync, writeFileSync } from 'node:fs';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
const letter = "P";
writeFileSync(`${OUTPUT_DIR}/entry.txt`, letter);
