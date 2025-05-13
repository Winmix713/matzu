import React, { useEffect, useRef } from 'react';
import { CryptoData, PortfolioData } from '../../types';
import { Bitcoin, Feather as Ethereum, CircleDollarSign, Waves } from 'lucide-react';

interface BubbleChartProps {
  cryptos: CryptoData[];
  portfolio: PortfolioData;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ cryptos, portfolio }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Get the appropriate icon for each cryptocurrency
  const getCryptoIcon = (symbol: string) => {
    switch(symbol.toLowerCase()) {
      case 'btc': return <Bitcoin className="h-6 w-6 text-white" />;
      case 'eth': return <Ethereum className="h-6 w-6 text-white" />;
      default: return <CircleDollarSign className="h-6 w-6 text-white" />;
    }
  };
  
  useEffect(() => {
    // Create bubbles based on portfolio data
    const bubbles = portfolio.holdings.map((holding, index) => {
      const crypto = cryptos.find(c => c.id === holding.id);
      if (!crypto) return null;
      
      return {
        id: holding.id,
        x: Math.random() * 80 + 10, // Random position between 10% and 90%
        y: Math.random() * 80 + 10,
        size: 30 + (holding.percentage / 5), // Size based on percentage
        color: crypto.color,
        percentage: holding.percentage,
        velocityX: Math.random() * 0.2 - 0.1,
        velocityY: Math.random() * 0.2 - 0.1,
      };
    }).filter(Boolean);
    
    const animate = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw bubbles
      bubbles.forEach((bubble: any) => {
        // Update position
        bubble.x += bubble.velocityX;
        bubble.y += bubble.velocityY;
        
        // Bounce off edges
        if (bubble.x < 0 || bubble.x > 100) bubble.velocityX *= -1;
        if (bubble.y < 0 || bubble.y > 100) bubble.velocityY *= -1;
        
        // Draw bubble
        const x = (bubble.x / 100) * canvas.width;
        const y = (bubble.y / 100) * canvas.height;
        const radius = bubble.size;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `${bubble.color}80`); // Semi-transparent center
        gradient.addColorStop(0.8, `${bubble.color}40`); // More transparent middle
        gradient.addColorStop(1, `${bubble.color}00`); // Transparent edge
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw border
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = bubble.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [cryptos, portfolio]);
  
  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Overlay cryptocurrency icons */}
      {portfolio.holdings.map((holding, index) => {
        const crypto = cryptos.find(c => c.id === holding.id);
        if (!crypto) return null;
        
        // Position icons at fixed strategic points
        const positions = [
          { left: '30%', top: '30%' },
          { left: '45%', top: '45%' },
          { left: '60%', top: '30%' },
          { left: '75%', top: '60%' },
          { left: '25%', top: '70%' }
        ];
        
        const pos = positions[index % positions.length];
        
        return (
          <div
            key={holding.id}
            className="absolute flex items-center justify-center"
            style={{
              left: pos.left,
              top: pos.top,
              width: `${holding.percentage / 2 + 30}px`,
              height: `${holding.percentage / 2 + 30}px`,
              borderRadius: '50%',
              background: `${crypto.color}40`,
              boxShadow: `0 0 15px ${crypto.color}80`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          >
            <div 
              className="flex items-center justify-center rounded-full"
              style={{
                width: '70%',
                height: '70%',
                background: '#1A1A23',
                border: `1px solid ${crypto.color}`
              }}
            >
              {getCryptoIcon(crypto.symbol)}
            </div>
            <div 
              className="absolute bottom-0 right-0 bg-[#1A1A23] rounded-full px-1.5 py-0.5 border"
              style={{ borderColor: crypto.color }}
            >
              <span className="text-xs font-medium">{holding.percentage}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BubbleChart;