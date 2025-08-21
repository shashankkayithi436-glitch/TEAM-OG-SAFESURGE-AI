
import React from 'react';
import { Shield, Users, AlertTriangle, Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-electric/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-electric animate-pulse-glow" />
              <div>
                <h1 className="text-2xl font-bold text-electric">CrowdShield X</h1>
                <p className="text-sm text-muted-foreground">Predict. Prevent. Protect.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-safe">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-medium">SYSTEM ONLINE</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Team OG | Hackathon Demo
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
