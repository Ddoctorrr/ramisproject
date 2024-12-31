import * as THREE from 'three';
import { Entity, EntityMesh } from './types';
import { MATERIAL_CONFIG } from '../config';

export class OilStream implements Entity {
  private mesh: EntityMesh;
  private flowOffset: number = 0;

  constructor() {
    this.initMesh();
  }

  private initMesh(): void {
    const curve = this.createCurve();
    const geometry = new THREE.TubeGeometry(curve, 100, 0.02, 8, false);
    
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(MATERIAL_CONFIG.OIL_COLOR),
      metalness: MATERIAL_CONFIG.OIL_METALNESS,
      roughness: MATERIAL_CONFIG.OIL_ROUGHNESS,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.6
    });

    this.mesh = new THREE.Mesh(geometry, material) as EntityMesh;
  }

  private createCurve(): THREE.CatmullRomCurve3 {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2, -2, 0),
      new THREE.Vector3(-1, 0, 1),
      new THREE.Vector3(1, 0, -1),
      new THREE.Vector3(2, 2, 0)
    ]);
  }

  public update(deltaTime: number): void {
    this.updateFlow(deltaTime);
    this.updateRotation(deltaTime);
  }

  private updateFlow(deltaTime: number): void {
    this.flowOffset += deltaTime * 0.0005;
    if (this.mesh.material instanceof THREE.Material) {
      this.mesh.material.opacity = 0.6 + Math.sin(this.flowOffset) * 0.2;
    }
  }

  private updateRotation(deltaTime: number): void {
    this.mesh.rotation.y += deltaTime * 0.0001;
  }

  public getMesh(): EntityMesh {
    return this.mesh;
  }
}