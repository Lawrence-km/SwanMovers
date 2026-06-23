import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const required = [
  'index.html',
  'contact.html',
  'thanks.html',
  'css/styles.css',
  'js/script.js',
  'images/Logo.png',
  'images/project1.jpg',
];

let failed = false;
for (const rel of required) {
  const p = join(root, rel);
  if (!existsSync(p)) {
    console.error(`Missing required file: ${rel}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('Build check passed — static site ready for deploy.');
