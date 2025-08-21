
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  status: 'safe' | 'warning' | 'danger' | 'info';
  trend?: 'up' | 'down' | 'stable';
}

const StatusCard = ({ title, value, subtitle, icon: Icon, status, trend }: StatusCardProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'safe':
        return 'border-safe-green/30 bg-safe-green/5 glow-safe';
      case 'warning':
        return 'border-warning/30 bg-warning/5 glow-amber';
      case 'danger':
        return 'border-danger-red/30 bg-danger-red/5 glow-red';
      case 'info':
      default:
        return 'border-electric/30 bg-electric/5 glow-blue';
    }
  };

  const getTextColor = () => {
    switch (status) {
      case 'safe':
        return 'text-safe';
      case 'warning':
        return 'text-warning';
      case 'danger':
        return 'text-danger';
      case 'info':
      default:
        return 'text-electric';
    }
  };

  return (
    <Card className={`p-6 transition-all duration-300 hover:scale-105 ${getStatusStyles()}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <div className="flex items-baseline space-x-2">
            <p className={`text-3xl font-bold ${getTextColor()}`}>
              {value}
            </p>
            {subtitle && (
              <p className="text-sm text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${getTextColor()}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
};

export default StatusCard;
