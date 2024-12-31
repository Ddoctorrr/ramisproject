import { Scene } from 'three';
import { OilDroplet } from '../entities/OilDroplet';
import { OilStream } from '../entities/OilStream';
import { SCENE_CONFIG } from '../config';

export class OilManager {
  private droplets: OilDroplet[];
  private streams: OilStream[];

  constructor(scene: Scene) {
    this.droplets = this.initDroplets(scene);
    this.streams = this.initStreams(scene);
  }

  private initDroplets(scene: Scene): OilDroplet[] {
    return Array.from(
      { length: SCENE_CONFIG.OIL_DROPLET_COUNT },
      () => {
        const droplet = new OilDroplet();
        scene.add(droplet.getMesh());
        return droplet;
      }
    );
  }

  private initStreams(scene: Scene): OilStream[] {
    return Array.from(
      { length: SCENE_CONFIG.OIL_STREAM_COUNT },
      () => {
        const stream = new OilStream();
        scene.add(stream.getMesh());
        return stream;
      }
    );
  }

  public update(deltaTime: number): void {
    this.droplets.forEach(droplet => droplet.update(deltaTime));
    this.streams.forEach(stream => stream.update(deltaTime));
  }

  public dispose(): void {
    [...this.droplets, ...this.streams].forEach(entity => {
      const mesh = entity.getMesh();
      mesh.geometry.dispose();
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(m => m.dispose());
      } else {
        mesh.material.dispose();
      }
    });
  }
}