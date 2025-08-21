
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Play, Pause, Settings } from 'lucide-react';

const VideoFeed = () => {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-electric">AI Detection Feed</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-electric/30">
            <Play className="h-4 w-4 mr-2" />
            Start Feed
          </Button>
          <Button variant="outline" size="sm" className="border-electric/30">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative h-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Mock video feed with detection boxes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Video className="h-16 w-16 text-electric/50 mx-auto" />
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-electric">YOLO Detection Ready</h4>
              <p className="text-sm text-muted-foreground">
                Connect CCTV feed for real-time crowd analysis
              </p>
            </div>
          </div>
        </div>

        {/* Mock detection overlays */}
        <div className="absolute top-4 left-4 bg-safe-green/20 border-2 border-safe-green rounded p-1">
          <span className="text-xs text-safe-green font-mono">Person 1 - 95%</span>
        </div>
        <div className="absolute top-12 right-8 bg-safe-green/20 border-2 border-safe-green rounded p-1">
          <span className="text-xs text-safe-green font-mono">Person 2 - 87%</span>
        </div>
        <div className="absolute bottom-8 left-8 bg-warning/20 border-2 border-warning rounded p-1">
          <span className="text-xs text-warning font-mono">Crowd - 76%</span>
        </div>

        {/* Status indicators */}
        <div className="absolute top-4 right-4 space-y-2">
          <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-electric/20 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
            <span className="text-xs text-electric font-medium">LIVE</span>
          </div>
          <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-safe-green/20 flex items-center space-x-2">
            <span className="text-xs text-safe font-medium">12 detected</span>
          </div>
        </div>

        {/* Mock timestamp */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded border border-electric/20">
          <span className="text-xs text-muted-foreground font-mono">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-safe">12</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Detected</p>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-warning">3</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Moving Fast</p>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-electric">94%</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Accuracy</p>
        </div>
      </div>
    </Card>
  );
};

export default VideoFeed;
