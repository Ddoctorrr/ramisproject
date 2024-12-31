import { Mesh, Material, BufferGeometry } from 'three';

export interface Entity {
  getMesh(): Mesh;
  update(deltaTime: number): void;
}

export interface EntityMesh extends Mesh {
  geometry: BufferGeometry;
  material: Material | Material[];
}