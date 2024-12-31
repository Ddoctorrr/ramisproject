import { Material, Mesh, Object3D, Scene, WebGLRenderer } from 'three';

export function disposeObject(obj: Object3D): void {
  if (obj instanceof Mesh) {
    if (obj.geometry) {
      obj.geometry.dispose();
    }

    if (Array.isArray(obj.material)) {
      obj.material.forEach(material => material.dispose());
    } else if (obj.material) {
      obj.material.dispose();
    }
  }

  obj.children.forEach(child => disposeObject(child));
}

export function cleanupScene(scene: Scene, renderer: WebGLRenderer): void {
  scene.traverse(disposeObject);
  renderer.dispose();
}