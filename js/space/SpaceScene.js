import * as THREE from '/node_modules/three/build/three.module.js';
import { SCENE_CONFIG, LIGHT_CONFIG, EARTH_CONFIG } from './config.js';
import { OilDroplet } from './entities/OilDroplet.js';
import { OilStream } from './entities/OilStream.js';
import { Earth } from './entities/Earth.js';

export class SpaceScene {
  constructor(container) {
    this.container = container;
    this.clock = new THREE.Clock();
    
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initEntities();
    this.initLights();
    this.initEventListeners();
    
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.15);
  }

  initCamera() {
    const { CAMERA_FOV, CAMERA_NEAR, CAMERA_FAR, CAMERA_POSITION } = SCENE_CONFIG;
    this.camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      window.innerWidth / window.innerHeight,
      CAMERA_NEAR,
      CAMERA_FAR
    );
    this.camera.position.set(
      CAMERA_POSITION.x,
      CAMERA_POSITION.y,
      CAMERA_POSITION.z
    );
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);
  }

  initEntities() {
    // Initialize Earth
    this.earth = new Earth();
    const earthMesh = this.earth.getMesh();
    earthMesh.scale.setScalar(EARTH_CONFIG.SCALE);
    earthMesh.position.z = -2;
    this.scene.add(earthMesh);

    // Initialize oil droplets
    this.oilDroplets = Array.from(
      { length: SCENE_CONFIG.OIL_DROPLET_COUNT },
      () => {
        const droplet = new OilDroplet();
        this.scene.add(droplet.getMesh());
        return droplet;
      }
    );

    // Initialize oil streams
    this.oilStreams = Array.from(
      { length: SCENE_CONFIG.OIL_STREAM_COUNT },
      () => {
        const stream = new OilStream();
        this.scene.add(stream.getMesh());
        return stream;
      }
    );
  }

  initLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(
      LIGHT_CONFIG.AMBIENT.color,
      LIGHT_CONFIG.AMBIENT.intensity
    );
    this.scene.add(ambientLight);

    // Spot lights for dramatic effect
    const { SPOT, RIM } = LIGHT_CONFIG;
    const positions = [
      { x: 5, y: 5, z: 5 },
      { x: -5, y: -5, z: 5 },
      { x: 0, y: 0, z: -5 }
    ];

    positions.forEach(pos => {
      const spotLight = new THREE.SpotLight(
        SPOT.color,
        SPOT.intensity,
        SPOT.distance,
        SPOT.angle,
        SPOT.penumbra
      );
      spotLight.position.set(pos.x, pos.y, pos.z);
      this.scene.add(spotLight);
    });

    // Add rim light for Earth's atmosphere effect
    const rimLight = new THREE.PointLight(
      RIM.color,
      RIM.intensity,
      RIM.distance
    );
    rimLight.position.set(0, 0, 5);
    this.scene.add(rimLight);
  }

  initEventListeners() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    // Add mouse movement effect
    window.addEventListener('mousemove', (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      
      this.camera.position.x += (mouseX - this.camera.position.x) * 0.05;
      this.camera.position.y += (-mouseY - this.camera.position.y) * 0.05;
      this.camera.lookAt(this.scene.position);
    });
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    const deltaTime = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();
    
    // Update entities
    this.earth.update(deltaTime);
    this.oilDroplets.forEach(droplet => droplet.update(deltaTime));
    this.oilStreams.forEach(stream => stream.update(deltaTime));
    
    // Gentle camera movement
    this.camera.position.x = Math.sin(elapsedTime * 0.1) * 0.5;
    this.camera.position.y = Math.cos(elapsedTime * 0.1) * 0.5;
    this.camera.lookAt(this.scene.position);
    
    this.renderer.render(this.scene, this.camera);
  }
}