import * as THREE from '/node_modules/three/build/three.module.js';
import { SCENE_CONFIG } from '../config.js';

export class Stars {
  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.1,
      transparent: true
    });
    
    this.createStars();
  }

  createStars() {
    const vertices = [];
    for (let i = 0; i < SCENE_CONFIG.STAR_COUNT; i++) {
      vertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        -Math.random() * 2000
      );
    }
    
    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    this.mesh = new THREE.Points(this.geometry, this.material);
  }

  update(deltaTime) {
    if (this.mesh) {
      this.mesh.rotation.x += deltaTime * 0.1;
      this.mesh.rotation.y += deltaTime * 0.15;
    }
  }

  getMesh() {
    return this.mesh;
  }
}