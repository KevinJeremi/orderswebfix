// Custom type for RigidBodyApi for @react-three/rapier refs
// This is a minimal type to enable property/method access in Lanyard.tsx
import * as THREE from 'three';

export type RigidBodyApi = {
    wakeUp: () => void;
    setNextKinematicTranslation: (vec: { x: number; y: number; z: number }) => void;
    translation: () => THREE.Vector3;
    angvel: () => THREE.Vector3;
    rotation: () => THREE.Vector3;
    setAngvel: (vec: { x: number; y: number; z: number }) => void;
    lerped?: THREE.Vector3;
};
