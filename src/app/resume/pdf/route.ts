import { readFile } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'CV', '陈佳玮_CV.pdf');
  const fileBuffer = await readFile(filePath);

  return new Response(new Uint8Array(fileBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': "attachment; filename=\"JavierChen_CV.pdf\"",
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
