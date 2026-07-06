import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const sizes = [16, 32, 48, 64, 128, 256];
const pngBuffers = await Promise.all(
  sizes.map((s) => sharp(path.join(root, 'icon.svg')).resize(s, s).png().toBuffer())
);
const icoBuffer = await pngToIco(pngBuffers);
fs.writeFileSync(path.join(root, 'icon.ico'), icoBuffer);
console.log('icon.ico written,', icoBuffer.length, 'bytes');
