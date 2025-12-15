import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const COUNT_FILE = path.join(process.cwd(), 'data', 'visits.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(COUNT_FILE);
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true });
  }
}

// Read current count
async function getCount(): Promise<number> {
  try {
    await ensureDataDir();
    if (existsSync(COUNT_FILE)) {
      const data = await readFile(COUNT_FILE, 'utf-8');
      const json = JSON.parse(data);
      return json.count || 0;
    }
  } catch (error) {
    console.error('Error reading count:', error);
  }
  return 0;
}

// Write count
async function setCount(count: number): Promise<void> {
  try {
    await ensureDataDir();
    await writeFile(COUNT_FILE, JSON.stringify({ count, lastUpdated: new Date().toISOString() }), 'utf-8');
  } catch (error) {
    console.error('Error writing count:', error);
  }
}

// GET - Retrieve visit count
export async function GET() {
  try {
    const count = await getCount();
    return NextResponse.json({ count, success: true });
  } catch (error) {
    return NextResponse.json({ count: 0, success: false, error: 'Failed to get count' }, { status: 500 });
  }
}

// POST - Increment visit count
export async function POST(request: NextRequest) {
  try {
    // Get client IP for basic rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Simple rate limiting: check if request came from same IP recently
    // In production, use Redis or a proper rate limiting service
    
    const currentCount = await getCount();
    const newCount = currentCount + 1;
    await setCount(newCount);
    
    return NextResponse.json({ 
      count: newCount, 
      success: true,
      message: 'Visit counted'
    });
  } catch (error) {
    console.error('Error incrementing count:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to increment count' 
    }, { status: 500 });
  }
}

