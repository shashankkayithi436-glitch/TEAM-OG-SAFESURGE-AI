
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, RotateCcw } from 'lucide-react';

const CrowdMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Mock crowd data zones
  const crowdZones = [
    { id: 1, name: 'Main Stage', lat: 28.6139, lng: 77.2090, density: 85, status: 'danger' },
    { id: 2, name: 'Food Court', lat: 28.6129, lng: 77.2080, density: 45, status: 'safe' },
    { id: 3, name: 'Exit Gate B', lat: 28.6149, lng: 77.2100, density: 72, status: 'warning' },
    { id: 4, name: 'Parking Area', lat: 28.6119, lng: 77.2070, density: 25, status: 'safe' },
  ];

  const initializeMap = () => {
    if (!mapboxToken.trim()) {
      alert('Please enter your Mapbox token first!');
      return;
    }

    // This would initialize the actual Mapbox map
    console.log('Initializing map with token:', mapboxToken);
    setShowTokenInput(false);
    
    // Mock implementation - in real app, this would use mapboxgl
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg relative overflow-hidden">
          <div class="absolute inset-0 grid-pattern opacity-20"></div>
          <div class="absolute top-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-electric/20">
            <h4 class="text-sm font-medium text-electric mb-2">Live Heatmap</h4>
            <div class="space-y-1 text-xs">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-safe-green"></div>
                <span class="text-muted-foreground">Safe (&lt;50%)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-warning"></div>
                <span class="text-muted-foreground">Warning (50-75%)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-danger-red"></div>
                <span class="text-muted-foreground">Danger (&gt;75%)</span>
              </div>
            </div>
          </div>
          
          ${crowdZones.map(zone => `
            <div class="absolute" style="left: ${20 + zone.id * 15}%; top: ${30 + zone.id * 10}%;">
              <div class="relative">
                <div class="w-12 h-12 rounded-full animate-ping ${
                  zone.status === 'danger' ? 'bg-danger-red' : 
                  zone.status === 'warning' ? 'bg-warning' : 'bg-safe-green'
                }/20"></div>
                <div class="absolute inset-0 w-12 h-12 rounded-full ${
                  zone.status === 'danger' ? 'bg-danger-red' : 
                  zone.status === 'warning' ? 'bg-warning' : 'bg-safe-green'
                }/40 flex items-center justify-center">
                  <div class="w-6 h-6 rounded-full ${
                    zone.status === 'danger' ? 'bg-danger-red' : 
                    zone.status === 'warning' ? 'bg-warning' : 'bg-safe-green'
                  } flex items-center justify-center">
                    <span class="text-xs font-bold text-background">${zone.density}</span>
                  </div>
                </div>
                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded border border-electric/20">
                  <span class="text-xs text-foreground whitespace-nowrap">${zone.name}</span>
                </div>
              </div>
            </div>
          `).join('')}
          
          <div class="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-electric/20">
            <h4 class="text-sm font-medium text-electric mb-2">Evacuation Routes</h4>
            <div class="space-y-1 text-xs text-muted-foreground">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-electric"></div>
                <span>Primary Route</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-warning"></div>
                <span>Alternative Route</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  };

  return (
    <Card className="p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-electric">Crowd Heatmap</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-electric/30">
            <Navigation className="h-4 w-4 mr-2" />
            Routes
          </Button>
          <Button variant="outline" size="sm" className="border-electric/30">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset View
          </Button>
        </div>
      </div>

      {showTokenInput ? (
        <div className="flex flex-col items-center justify-center h-96 space-y-4">
          <MapPin className="h-12 w-12 text-electric/50" />
          <div className="text-center space-y-2">
            <h4 className="text-lg font-medium text-electric">Mapbox Integration</h4>
            <p className="text-sm text-muted-foreground max-w-md">
              Enter your Mapbox public token to enable live map visualization.
              Get your token at{' '}
              <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
                mapbox.com
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-2 w-full max-w-md">
            <input
              type="text"
              placeholder="pk.eyJ1IjoieW91cm5hbWUiLCJhIjoi..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1 px-3 py-2 bg-input border border-electric/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-electric/50"
            />
            <Button onClick={initializeMap} className="bg-electric text-primary-foreground hover:bg-electric/90">
              Load Map
            </Button>
          </div>
        </div>
      ) : (
        <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden" />
      )}
    </Card>
  );
};

export default CrowdMap;
