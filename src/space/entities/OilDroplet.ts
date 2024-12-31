import * as THREE from 'three';
import { Entity, EntityMesh } from './types';
import { MATERIAL_CONFIG } from '../config';

export class OilDroplet implements Entity {
  private mesh: EntityMesh;
  private velocity: THREE.Vector3;

  constructor() {
    this.initMesh();
    this.setRandomPosition();
    this.initVelocity();
  }

  private initMesh(): void {
    const geometry = new THREE.SphereGeometry(
      Math.random() * 0.05 + 0.02,
      32,
      32
    );
    
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(MATERIAL_CONFIG.OIL_COLOR),
      metalness: MATERIAL_CONFIG.OIL_METALNESS,
      roughness: MATERIAL_CONFIG.OIL_ROUGHNESS,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: MATERIAL_CONFIG.OIL_OPACITY,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geometry, material) as EntityMesh;
  }

  private setRandomPosition(): void {
    this.mesh.position.set(
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5
    );
  }

  private initVelocity(): void {
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.002,
      (Math.random() - 0.5) * 0.002,
      (Math.random() - 0.5) * 0.002
    );
  }

  public update(deltaTime: number): void {
    this.updatePosition();
    this.updateRotation(deltaTime);
    this.checkBoundaries();
  }

  private updatePosition(): void {
    this.mesh.position.add(this.velocity);
  }

  private updateRotation(deltaTime: number): void {
    this.mesh.rotation.x += Math.sin(deltaTime * 0.001) * 0.01;
    this.mesh.rotation.y += Math.cos(deltaTime * 0.001) * 0.01;
  }

  private checkBoundaries(): void {
    ['x', 'y', 'z'].forEach(axis => {
      if (Math.abs(this.mesh.position[axis]) > 2.5) {
        this.mesh.position[axis] *= -0.9;
      }
    });
  }

  public getMesh(): EntityMesh {
    return this.mesh;
  }
}