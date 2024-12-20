import { FlightRadar24API } from 'flightradarapi';
import { NextResponse } from 'next/server';

const frApi = new FlightRadar24API();

export async function GET() {
  try {
    const zones = await frApi.getZones();
    return NextResponse.json({ success: true, data: zones });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch zones', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

