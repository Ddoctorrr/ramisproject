import React, { useEffect, useRef } from 'react';
import { SpaceScene } from '../../space/SpaceScene';

export function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SpaceScene | null>(null);

  useEffect(() => {
    if (containerRef.current && !sceneRef.current) {
      sceneRef.current = new SpaceScene(containerRef.current);
    }

    return () => {
      if (sceneRef.current) {
        // Clean up Three.js resources
        sceneRef.current.dispose();
        sceneRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}