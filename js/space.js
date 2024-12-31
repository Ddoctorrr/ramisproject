import { SpaceScene } from './space/SpaceScene.js';

export function initializeSpaceScene() {
  const container = document.getElementById('spaceBackground');
  if (!container) return;
  
  new SpaceScene(container);
}