import sharp from 'sharp';
import png2icons from 'png2icons';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const pngBuffer = await sharp(path.join(root, 'icon.svg')).resize(1024, 1024).png().toBuffer();
const icnsBuffer = png2icons.createICNS(pngBuffer, png2icons.BICUBIC, 0);
fs.writeFileSync(path.join(root, 'icon.icns'), icnsBuffer);
console.log('icon.icns written,', icnsBuffer.length, 'bytes');
