/**
 * generate-favicon.mjs
 * Generates a valid 16x16 + 32x32 favicon.ico from scratch using pure Node.js.
 * No external dependencies required — uses the Windows BMP ICO format.
 *
 * Colors: Novara brand primary #1E3A5F (30, 58, 95 RGB)
 * The .svg icon takes priority in modern browsers; this .ico silences the 404.
 */
import { writeFileSync } from 'fs';

/** Build a single BMP-based icon image for ICO embedding */
function buildBmpImage(size, r, g, b) {
  const bmpHeaderSize = 40;
  const pixelDataSize = size * size * 4; // 32-bit BGRA per pixel
  const andMaskStride = Math.ceil(size / 32) * 4; // rows padded to 4 bytes
  const andMaskSize = andMaskStride * size;
  const totalSize = bmpHeaderSize + pixelDataSize + andMaskSize;

  const buf = Buffer.alloc(totalSize, 0);
  let offset = 0;

  // BITMAPINFOHEADER (40 bytes)
  buf.writeUInt32LE(40, offset);          offset += 4;  // biSize
  buf.writeInt32LE(size, offset);         offset += 4;  // biWidth
  buf.writeInt32LE(size * 2, offset);     offset += 4;  // biHeight (doubled = includes AND mask)
  buf.writeUInt16LE(1, offset);           offset += 2;  // biPlanes
  buf.writeUInt16LE(32, offset);          offset += 2;  // biBitCount (32-bit BGRA)
  buf.writeUInt32LE(0, offset);           offset += 4;  // biCompression (BI_RGB)
  buf.writeUInt32LE(pixelDataSize, offset); offset += 4; // biSizeImage
  buf.writeInt32LE(0, offset);            offset += 4;  // biXPelsPerMeter
  buf.writeInt32LE(0, offset);            offset += 4;  // biYPelsPerMeter
  buf.writeUInt32LE(0, offset);           offset += 4;  // biClrUsed
  buf.writeUInt32LE(0, offset);           offset += 4;  // biClrImportant

  // XOR mask (pixel data) — BMP is stored bottom-to-top, BGRA order
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const px = offset + (row * size + col) * 4;
      buf[px + 0] = b;   // Blue
      buf[px + 1] = g;   // Green
      buf[px + 2] = r;   // Red
      buf[px + 3] = 255; // Alpha (fully opaque)
    }
  }
  offset += pixelDataSize;

  // AND mask — all zeros (opaque), padded rows already zeroed by Buffer.alloc
  // (nothing to write, the alloc already zeroed it)

  return buf;
}

/** Wrap one or more BMP images into an ICO container */
function buildIco(images) {
  const count = images.length;

  // ICO header: 6 bytes
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);     // Reserved
  icoHeader.writeUInt16LE(1, 2);     // Type: 1 = ICO
  icoHeader.writeUInt16LE(count, 4); // Number of images

  // Each ICONDIRENTRY is 16 bytes
  const dirEntries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // Width (0 encodes 256)
    entry.writeUInt8(size === 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2);    // ColorCount (0 = no palette for 32-bit)
    entry.writeUInt8(0, 3);    // Reserved
    entry.writeUInt16LE(1, 4); // Planes
    entry.writeUInt16LE(32, 6); // BitCount
    entry.writeUInt32LE(data.length, 8); // SizeInBytes — filled after offset calc
    return entry;
  });

  // Calculate offsets for each image
  const headerTotalSize = 6 + count * 16;
  let currentOffset = headerTotalSize;
  images.forEach(({ data }, i) => {
    dirEntries[i].writeUInt32LE(currentOffset, 12); // FileOffset
    dirEntries[i].writeUInt32LE(data.length, 8);    // SizeInBytes
    currentOffset += data.length;
  });

  return Buffer.concat([icoHeader, ...dirEntries, ...images.map(i => i.data)]);
}

// Novara brand primary: #1E3A5F → R=30, G=58, B=95
const R = 30, G = 58, B = 95;

const ico = buildIco([
  { size: 16, data: buildBmpImage(16, R, G, B) },
  { size: 32, data: buildBmpImage(32, R, G, B) },
]);

writeFileSync('public/favicon.ico', ico);
console.log('✅  public/favicon.ico generated successfully (' + ico.length + ' bytes, 16x16 + 32x32)');
