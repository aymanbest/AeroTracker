import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Building2, Search, Globe2, Building } from 'lucide-react'
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">FlightRadar API Documentation</h1>
            <p className="text-gray-500 dark:text-gray-400">
              A comprehensive API wrapper for FlightRadar24 data
            </p>
          </div>
          <ThemeToggle />
        </div>

        <Tabs defaultValue="flights">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="flights">
              <Plane className="mr-2 h-4 w-4" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="airports">
              <Building2 className="mr-2 h-4 w-4" />
              Airports
            </TabsTrigger>
            <TabsTrigger value="airlines">
              <Building className="mr-2 h-4 w-4" />
              Airlines
            </TabsTrigger>
            <TabsTrigger value="zones">
              <Globe2 className="mr-2 h-4 w-4" />
              Zones
            </TabsTrigger>
            <TabsTrigger value="search">
              <Search className="mr-2 h-4 w-4" />
              Search
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get All Flights</CardTitle>
                  <CardDescription>Retrieve all active flights</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/flights
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Flights in Bounds</CardTitle>
                  <CardDescription>Get flights within geographical bounds</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/flights?bounds=y1,y2,x1,x2
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Example: ?bounds=52.567967,51.567967,13.282644,14.282644
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Format: latitude1,latitude2,longitude1,longitude2
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Flight Details</CardTitle>
                  <CardDescription>Get detailed information about a specific flight</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    POST /api/flights
                    {'\n'}
                    {JSON.stringify({ flightId: "ABC123" }, null, 2)}
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calculate Distance</CardTitle>
                  <CardDescription>Get distance between a flight and an airport</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    POST /api/distance
                    {'\n'}
                    {JSON.stringify({
                      flightId: "123456789",
                      airportCode: "KJFK"
                    }, null, 2)}
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Returns the distance in kilometers between the specified flight and airport
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="airports">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get All Airports</CardTitle>
                  <CardDescription>Retrieve all airports in the database</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/airports
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Airport by ICAO or IATA</CardTitle>
                  <CardDescription>Get airport information by ICAO or IATA code</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/airports?icta=LAX
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Returns detailed information including coordinates, country, and timezone
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="airlines">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get All Airlines</CardTitle>
                  <CardDescription>Retrieve all airlines in the database</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/airlines
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Returns a list of all airlines with their basic information
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="zones">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get All Zones</CardTitle>
                  <CardDescription>Retrieve all FlightRadar24 coverage zones</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/zones
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Returns all available coverage zones with their boundaries
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="search">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                  <CardDescription>Search for flights, airports, or airlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg">
                    GET /api/search?q=searchQuery
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Example: /api/search?q=United
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Response Format</CardTitle>
            <CardDescription>All endpoints return data in the following format</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg">
              {JSON.stringify({
                success: true,
                data: "Endpoint specific data will be here"
              }, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
