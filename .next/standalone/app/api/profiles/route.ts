import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'lib/data/profiles.json');

// Helper to ensure the file exists and is readable
async function getProfiles() {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading profiles:', error);
    return [];
  }
}

export async function GET() {
  const profiles = await getProfiles();
  return NextResponse.json(profiles);
}

export async function POST(request: Request) {
  try {
    const profiles = await request.json();
    
    // Validate it's an array before writing
    if (!Array.isArray(profiles)) {
      return NextResponse.json({ error: 'Profiles must be an array' }, { status: 400 });
    }

    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(profiles, null, 2), 'utf-8');
    return NextResponse.json({ success: true, profiles });
  } catch (error) {
    console.error('Error writing profiles:', error);
    return NextResponse.json({ error: 'Failed to save profiles' }, { status: 500 });
  }
}
