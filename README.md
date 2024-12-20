# AeroTracker Dashboard

A modern web application that provides documentation and endpoints for interacting with FlightRadar24 data. Built with Next.js.

## Features

- 🛩️ Real-time flight tracking data
- 🌍 Geographic bounds filtering
- ✈️ Detailed flight information
- 🏢 Airport and airline data
- 🔍 Search functionality
- 🌓 Dark/Light theme support
- 📱 Responsive design

## API Endpoints

### Flights
- `GET /api/flights` - Get all active flights
- `GET /api/flights?bounds=lat1,lat2,lon1,lon2` - Get flights within geographical bounds
- `POST /api/flights` - Get flight details
- `POST /api/distance` - Calculate distance between flight and airport

### Airports
- `GET /api/airports` - Get all airports
- `GET /api/airports?icta={code}` - Get airport by ICAO/IATA code

### Airlines
- `GET /api/airlines` - Get all airlines

### Zones
- `GET /api/zones` - Get FlightRadar24 coverage zones

### Search
- `GET /api/search?q={query}` - Search flights, airports, or airlines

## Technology Stack

- Next.js
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com/) components
- [FlightRadarAPI](https://github.com/JeanExtreme002/FlightRadarAPI) - Nodejs package for accessing FlightRadar24 data

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Credits

This project uses the [FlightRadarAPI](https://github.com/JeanExtreme002/FlightRadarAPI) package by [JeanExtreme002](https://github.com/JeanExtreme002) for accessing FlightRadar24 data.

## License

MIT License
