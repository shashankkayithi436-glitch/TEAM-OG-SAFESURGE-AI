
import React from 'react';
import Header from '@/components/Header';
import StatusCard from '@/components/StatusCard';
import AlertPanel from '@/components/AlertPanel';
import CrowdMap from '@/components/CrowdMap';
import VideoFeed from '@/components/VideoFeed';
import { Users, AlertTriangle, MapPin, Activity, Shield, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatusCard
            title="Total Crowd"
            value="2,847"
            subtitle="people"
            icon={Users}
            status="info"
          />
          <StatusCard
            title="Critical Zones"
            value="2"
            subtitle="active alerts"
            icon={AlertTriangle}
            status="danger"
          />
          <StatusCard
            title="Safe Routes"
            value="8/10"
            subtitle="available"
            icon={MapPin}
            status="safe"
          />
          <StatusCard
            title="System Status"
            value="98.5%"
            subtitle="uptime"
            icon={Activity}
            status="safe"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <CrowdMap />
          </div>
          
          {/* Alert Panel */}
          <div className="lg:col-span-1">
            <AlertPanel />
          </div>
        </div>

        {/* Video Feed and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VideoFeed />
          
          {/* Additional Analytics Card */}
          <div className="grid grid-cols-1 gap-6">
            <StatusCard
              title="AI Prediction"
              value="Stable"
              subtitle="next 15 min"
              icon={Zap}
              status="safe"
            />
            <StatusCard
              title="Emergency Level"
              value="Level 2"
              subtitle="moderate alert"
              icon={Shield}
              status="warning"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-electric/20">
          <div className="space-y-2">
            <p className="text-electric font-semibold">CrowdShield X - Team OG</p>
            <p className="text-sm text-muted-foreground">
              Hackathon Demo | AI-Powered Crowd Management System
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, Tailwind CSS | Powered by YOLO + OpenCV
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
