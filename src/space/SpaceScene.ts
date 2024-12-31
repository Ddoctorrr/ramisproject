import * as THREE from 'three';
import { SCENE_CONFIG, LIGHT_CONFIG, EARTH_CONFIG } from './config';
import { OilDroplet } from './entities/OilDroplet';
import { OilStream } from './entities/OilStream';
import { Earth } from './entities/Earth';

export class SpaceScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private clock: THREE.Clock;
  private earth: Earth;
  private oilDroplets: OilDroplet[];
  private oilStreams: OilStream[];

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock();
    
    this.initScene();
    this.initCamera();
    this.initRenderer(container);
    this.initEntities();
    this.initLights();
    this.initEventListeners();
    
    this.animate();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.15);
  }

  private initCamera(): void {
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

  private initRenderer(container: HTMLElement): void {
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);
  }

  private initEntities(): void {
    // Initialize Earth
    this.earth = new Earth();
    const earthMesh = this.earth.getMesh();
    earthMesh.scale.setScalar(EARTH_CONFIG.SCALE);
    earthMesh.position.z = -2;
    this.scene.add(earthMesh);

    // Initialize oil droplets and streams
    this.oilDroplets = Array.from(
      { length: SCENE_CONFIG.OIL_DROPLET_COUNT },
      () => {
        const droplet = new OilDroplet();
        this.scene.add(droplet.getMesh());
        return droplet;
      }
    );

    this.oilStreams = Array.from(
      { length: SCENE_CONFIG.OIL_STREAM_COUNT },
      () => {
        const stream = new OilStream();
        this.scene.add(stream.getMesh());
        return stream;
      }
    );
  }

  private initLights(): void {
    // Add lights as before...
    const { AMBIENT, SPOT, RIM } = LIGHT_CONFIG;
    
    const ambientLight = new THREE.AmbientLight(
      AMBIENT.color,
      AMBIENT.intensity
    );
    this.scene.add(ambientLight);

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

    const rimLight = new THREE.PointLight(
      RIM.color,
      RIM.intensity,
      RIM.distance
    );
    rimLight.position.set(0, 0, 5);
    this.scene.add(rimLight);
  }

  private initEventListeners(): void {
    window.addEventListener('resize', this.onWindowResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(event: MouseEvent): void {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    
    this.camera.position.x += (mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    
    const deltaTime = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();
    
    // Update all entities
    this.earth.update(deltaTime);
    this.oilDroplets.forEach(droplet => droplet.update(deltaTime));
    this.oilStreams.forEach(stream => stream.update(deltaTime));
    
    // Gentle camera movement
    this.camera.position.x = Math.sin(elapsedTime * 0.1) * 0.5;
    this.camera.position.y = Math.cos(elapsedTime * 0.1) * 0.5;
    this.camera.lookAt(this.scene.position);
    
    this.renderer.render(this.scene, this.camera);
  }

  public dispose(): void {
    // Clean up Three.js resources
    this.renderer.dispose();
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (object.material instanceof THREE.Material) {
          object.material.dispose();
        }
      }
    });
    
    // Remove event listeners
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }
}