import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// Ensure the output directory exists
mkdirSync(outputDir, { recursive: true });

// Write the letter P (stands for "Productive" - a day of building bounties and helping users)
writeFileSync(`${outputDir}/entry.txt`, 'P');

console.log(`Successfully wrote "P" to ${outputDir}/entry.txt`);
