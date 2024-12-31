import * as THREE from '/node_modules/three/build/three.module.js';

export class Earth {
  constructor() {
    // Earth geometry
    this.geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Load Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    const earthMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
    const bumpMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
    const specularMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');
    
    // Earth material with realistic properties
    this.material = new THREE.MeshPhongMaterial({
      map: earthMap,
      bumpMap: bumpMap,
      bumpScale: 0.05,
      specularMap: specularMap,
      specular: new THREE.Color('grey'),
      shininess: 50
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    
    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.01, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x93cfef,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    
    this.atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.mesh.add(this.atmosphere);
  }

  update(deltaTime) {
    // Rotate Earth
    this.mesh.rotation.y += deltaTime * 0.05;
    
    // Gentle floating movement
    this.mesh.position.y = Math.sin(deltaTime * 0.0005) * 0.1;
  }

  getMesh() {
    return this.mesh;
  }
}