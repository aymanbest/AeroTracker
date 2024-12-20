import { FlightRadar24API } from 'flightradarapi';
import { NextResponse } from 'next/server';

const frApi = new FlightRadar24API();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const icta = searchParams.get('icta');
  
  try {
    if (icta) {
      const airport = await frApi.getAirport(icta , true);
      return NextResponse.json({ success: true, data: airport });
    }
    
    // Get all airports if no ICAO or IATA code specified
    const airports = await frApi.getAirports();
    return NextResponse.json({ success: true, data: airports });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch airports', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

