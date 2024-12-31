// Space scene configuration constants
export const SCENE_CONFIG = {
  OIL_DROPLET_COUNT: 100,
  OIL_STREAM_COUNT: 3,
  CAMERA_FOV: 75,
  CAMERA_NEAR: 0.1,
  CAMERA_FAR: 1000,
  CAMERA_POSITION: { x: 0, y: 0, z: 5 }
};

export const MATERIAL_CONFIG = {
  OIL_COLOR: 0x2A1B0A,
  OIL_METALNESS: 0.9,
  OIL_ROUGHNESS: 0.1,
  OIL_OPACITY: 0.8
};

export const LIGHT_CONFIG = {
  AMBIENT: {
    color: 0x1A1A1A,
    intensity: 0.2
  },
  SPOT: {
    color: 0xFFFFFF,
    intensity: 1,
    distance: 10,
    angle: Math.PI / 4,
    penumbra: 0.5
  },
  RIM: {
    color: 0x93cfef,
    intensity: 2,
    distance: 15
  }
};

export const EARTH_CONFIG = {
  ROTATION_SPEED: 0.05,
  FLOAT_SPEED: 0.0005,
  FLOAT_AMPLITUDE: 0.1,
  SCALE: 1.5
};