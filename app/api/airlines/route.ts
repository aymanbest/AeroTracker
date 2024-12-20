import { FlightRadar24API } from 'flightradarapi';
import { NextResponse } from 'next/server';

const frApi = new FlightRadar24API();

export async function GET() {
  try {
    const airlines = await frApi.getAirlines();
    return NextResponse.json({ success: true, data: airlines });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch airlines', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

