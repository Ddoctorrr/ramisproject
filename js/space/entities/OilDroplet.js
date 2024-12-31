import * as THREE from '/node_modules/three/build/three.module.js';

export class OilDroplet {
  constructor() {
    // Create oil droplet with realistic properties
    this.geometry = new THREE.SphereGeometry(Math.random() * 0.05 + 0.02, 32, 32);
    this.material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x2A1B0A),
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.setRandomPosition();
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.002,
      (Math.random() - 0.5) * 0.002,
      (Math.random() - 0.5) * 0.002
    );
  }

  setRandomPosition() {
    this.mesh.position.set(
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5
    );
  }

  update(deltaTime) {
    // Simulate viscous fluid movement
    this.mesh.position.add(this.velocity);
    
    // Add subtle wobble effect
    this.mesh.rotation.x += Math.sin(deltaTime * 0.001) * 0.01;
    this.mesh.rotation.y += Math.cos(deltaTime * 0.001) * 0.01;
    
    // Boundary check with smooth wrapping
    ['x', 'y', 'z'].forEach(axis => {
      if (Math.abs(this.mesh.position[axis]) > 2.5) {
        this.mesh.position[axis] *= -0.9;
      }
    });
  }

  getMesh() {
    return this.mesh;
  }
}