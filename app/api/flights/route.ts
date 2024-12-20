import { FlightRadar24API } from 'flightradarapi';
import { NextResponse } from 'next/server';

const frApi = new FlightRadar24API();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bounds = searchParams.get('bounds');
  
  try {
    if (bounds) {
      // Pass bounds string directly to getFlights
      const flights = await frApi.getFlights(null, bounds);
      return NextResponse.json({ success: true, data: flights });
    }
    
    // Get all flights if no bounds specified
    const flights = await frApi.getFlights();
    return NextResponse.json({ success: true, data: flights });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch flights', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { flightId } = body;
    
    if (!flightId) {
      return NextResponse.json({ success: false, error: 'Flight ID is required' }, { status: 400 });
    }

    const flights = await frApi.getFlights();
    const flightInstance = flights.find(flight => flight.id === flightId);

    if (!flightInstance) {
      return NextResponse.json({ success: false, error: 'Flight not found' }, { status: 404 });
    }

    const details = await frApi.getFlightDetails(flightInstance);
    flightInstance.setFlightDetails(details);
    return NextResponse.json({ success: true, data: flightInstance });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch flight details', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
