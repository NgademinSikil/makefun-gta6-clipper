// gta6-clipper-01 entry: hands the house the address of the YouTube Short
// that carries this entry's clip. The clip itself is the entry — the house
// reads its views from YouTube — so all this program does is forward the
// VIDEO.json file from the repository root into the output directory.
//
// Run the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// VIDEO.json is deliberately absent until the clip is uploaded to YouTube
// and its address is known. Until then this program warns and exits 0
// instead of failing, so the repository stays checkable before the upload.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const videoFile = join(repoDir, 'VIDEO.json');

if (!existsSync(videoFile)) {
  console.warn(
    'VIDEO.json is not in the repository yet: upload the clip to YouTube ' +
      'first, then add VIDEO.json with its address ({"url": "..."}) and re-run.',
  );
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });

// Validate the URL shape before handing it in: it must be a YouTube
// video address — a Short, a watch page, or a youtu.be link — with an
// 11-character video id (letters, digits, _ or -). A malformed URL is
// refused by the house at submit time, so warn clearly here, but still
// copy the file and exit 0: the program must not crash the run.
const YOUTUBE_URL =
  /^https:\/\/(?:www\.youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}(?:[?&#].*)?$/;
let videoUrl: unknown;
try {
  videoUrl = JSON.parse(readFileSync(videoFile, 'utf8')).url;
} catch {
  videoUrl = undefined;
}
if (typeof videoUrl !== 'string' || !YOUTUBE_URL.test(videoUrl)) {
  console.warn(
    'VIDEO.json does not contain a valid YouTube video URL ' +
      '(expected https://www.youtube.com/shorts/<11-char id>, ' +
      'https://www.youtube.com/watch?v=<11-char id>, or ' +
      'https://youtu.be/<11-char id>); copying it unchanged — ' +
      'the house will refuse a bad URL at submit time.',
  );
} else {
  console.log(`Handing in clip: ${videoUrl}`);
}
copyFileSync(videoFile, join(outDir, 'VIDEO.json'));
console.log(`Copied VIDEO.json to ${join(outDir, 'VIDEO.json')}`);
