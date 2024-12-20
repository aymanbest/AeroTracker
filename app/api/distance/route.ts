import { FlightRadar24API } from 'flightradarapi';
import { NextResponse } from 'next/server';

const frApi = new FlightRadar24API();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { flightId, airportCode } = body;
    
    if (!flightId || !airportCode) {
      return NextResponse.json({ 
        success: false, 
        error: 'Flight ID and airport code are required' 
      }, { status: 400 });
    }

    // Get flight and airport instances
    const flights = await frApi.getFlights();
    const flight = flights.find(f => f.id === flightId);
    
    if (!flight) {
      return NextResponse.json({ 
        success: false, 
        error: 'Flight not found' 
      }, { status: 404 });
    }

    const airport = await frApi.getAirport(airportCode);
    const distance = flight.getDistanceFrom(airport);

    return NextResponse.json({
      success: true,
      data: {
        distance,
        units: 'kilometers',
        flight: {
          id: flight.id,
          latitude: flight.latitude,
          longitude: flight.longitude
        },
        airport: {
          code: airportCode,
          latitude: airport.latitude,
          longitude: airport.longitude
        }
      }
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to calculate distance', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}