
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, MapPin, Clock, X } from 'lucide-react';

interface Alert {
  id: string;
  type: 'overcrowding' | 'panic' | 'evacuation';
  zone: string;
  message: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

const AlertPanel = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'overcrowding',
      zone: 'Main Stage Area',
      message: 'Crowd density at 85% capacity',
      timestamp: '2 min ago',
      severity: 'high'
    },
    {
      id: '2',
      type: 'panic',
      zone: 'Exit Gate B',
      message: 'Unusual movement patterns detected',
      timestamp: '5 min ago',
      severity: 'medium'
    },
    {
      id: '3',
      type: 'evacuation',
      zone: 'Food Court',
      message: 'Evacuation route activated',
      timestamp: '8 min ago',
      severity: 'low'
    }
  ]);

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-l-danger-red bg-danger-red/10 text-danger';
      case 'medium':
        return 'border-l-warning bg-warning/10 text-warning';
      case 'low':
        return 'border-l-safe-green bg-safe-green/10 text-safe';
      default:
        return 'border-l-electric bg-electric/10 text-electric';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'overcrowding':
        return Users;
      case 'panic':
        return AlertTriangle;
      case 'evacuation':
        return MapPin;
      default:
        return AlertTriangle;
    }
  };

  const dismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <Card className="p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-electric">Live Alerts</h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
          <span>Real-time monitoring</span>
        </div>
      </div>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {alerts.map((alert) => {
          const IconComponent = getAlertIcon(alert.type);
          return (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border-l-4 ${getSeverityStyles(alert.severity)} transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <IconComponent className="h-5 w-5 mt-0.5" />
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm uppercase tracking-wider">
                        {alert.zone}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">
                      {alert.message}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{alert.timestamp}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => dismissAlert(alert.id)}
                  className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default AlertPanel;
