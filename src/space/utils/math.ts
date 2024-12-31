import { Vector3 } from 'three';

export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomVector3(scale: number = 1): Vector3 {
  return new Vector3(
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale
  );
}

export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}