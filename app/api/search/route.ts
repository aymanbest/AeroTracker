import { FlightRadar24API } from 'flightradarapi';
import { NextResponse } from 'next/server';

const frApi = new FlightRadar24API();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  if (!query) {
    return NextResponse.json({ success: false, error: 'Query parameter is required' }, { status: 400 });
  }
  
  try {
    const results = await frApi.search(query);
    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to perform search', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

