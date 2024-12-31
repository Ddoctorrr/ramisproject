import * as THREE from '/node_modules/three/build/three.module.js';

export class Nebula {
  constructor() {
    this.geometry = new THREE.SphereGeometry(Math.random() * 100 + 50, 32, 32);
    this.material = new THREE.MeshPhongMaterial({
      color: this.getRandomColor(),
      transparent: true,
      opacity: 0.3,
      emissive: this.getRandomColor(),
      emissiveIntensity: 0.5
    });
    
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.setRandomPosition();
    
    this.light = new THREE.PointLight(0xFFFFFF, 1, 300);
    this.light.position.copy(this.mesh.position);
  }

  getRandomColor() {
    return new THREE.Color(
      Math.random(),
      Math.random(),
      Math.random()
    );
  }

  setRandomPosition() {
    this.mesh.position.set(
      (Math.random() - 0.5) * 1000,
      (Math.random() - 0.5) * 1000,
      -Math.random() * 1000
    );
  }

  update(time) {
    this.mesh.rotation.x += 0.001;
    this.mesh.rotation.y += 0.001;
    
    const scale = 1 + Math.sin(time) * 0.1;
    this.mesh.scale.set(scale, scale, scale);
    this.light.intensity = 1 + Math.sin(time) * 0.5;
  }

  getMesh() {
    return this.mesh;
  }

  getLight() {
    return this.light;
  }
}