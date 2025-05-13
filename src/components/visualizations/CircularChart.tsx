import React, { useEffect, useRef } from 'react';
import { RegionData } from '../../types';

interface CircularChartProps {
  regions: RegionData[];
}

const CircularChart: React.FC<CircularChartProps> = ({ regions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth - 40; // Account for padding
        canvas.height = 300; // Fixed height
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Calculate total value for percentage calculations
    const totalValue = regions.reduce((sum, region) => sum + region.value, 0);
    
    // Draw the chart
    const drawChart = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 20;
      
      // Current angle
      let currentAngle = -0.5 * Math.PI; // Start at top (12 o'clock position)
      
      // Draw segments
      regions.forEach((region, index) => {
        const segmentAngle = (region.value / totalValue) * (2 * Math.PI);
        
        // Draw segment
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + segmentAngle);
        ctx.closePath();
        
        // Fill with gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0.4, `${region.color}80`); // Semi-transparent inner
        gradient.addColorStop(0.8, region.color); // Solid outer
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw border
        ctx.strokeStyle = '#0A0A0C';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Update angle for next segment
        currentAngle += segmentAngle;
      });
      
      // Draw center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.35, 0, 2 * Math.PI);
      ctx.fillStyle = '#1A1A23';
      ctx.fill();
      ctx.strokeStyle = '#2A2A33';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Pulsating effect for center
      const time = new Date().getTime() * 0.001;
      const pulse = Math.sin(time * 2) * 0.05 + 0.95;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.3 * pulse, 0, 2 * Math.PI);
      ctx.fillStyle = '#0A0A0C';
      ctx.fill();
      
      // Draw center text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('22,317', centerX, centerY - 10);
      
      ctx.fillStyle = '#AAAAAA';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText('SUMMARY', centerX, centerY + 15);
      
      // Request next frame
      requestAnimationFrame(drawChart);
    };
    
    const animationId = requestAnimationFrame(drawChart);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [regions]);
  
  return (
    <div className="p-4 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-6">Income</h3>
      <div className="text-4xl font-bold font-mono mb-2">$32,134</div>
      <div className="flex items-center mb-6">
        <span className="text-[#00E5A1] mr-2">↑2.5%</span>
        <span className="text-gray-400 text-sm">Compared to $21,340 last month</span>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default CircularChart;