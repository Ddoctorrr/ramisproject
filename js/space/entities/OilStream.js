import * as THREE from '/node_modules/three/build/three.module.js';

export class OilStream {
  constructor() {
    // Create curved path for oil stream
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2, -2, 0),
      new THREE.Vector3(-1, 0, 1),
      new THREE.Vector3(1, 0, -1),
      new THREE.Vector3(2, 2, 0)
    ]);

    const tubeGeometry = new THREE.TubeGeometry(this.curve, 100, 0.02, 8, false);
    this.material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1A0F05),
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.6
    });

    this.mesh = new THREE.Mesh(tubeGeometry, this.material);
    this.flowOffset = 0;
  }

  update(deltaTime) {
    // Animate flow effect
    this.flowOffset += deltaTime * 0.0005;
    this.material.opacity = 0.6 + Math.sin(this.flowOffset) * 0.2;
    
    // Gentle rotation
    this.mesh.rotation.y += deltaTime * 0.0001;
  }

  getMesh() {
    return this.mesh;
  }
}