declare module '*.glb' {
    const content: string;
    export default content;
}

declare module '*.gltf' {
    const content: string;
    export default content;
}

declare module '*.obj' {
    const content: string;
    export default content;
}

declare module '*.fbx' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module 'meshline' {
    export class MeshLineGeometry extends THREE.BufferGeometry {
        constructor();
        setPoints(points: THREE.Vector3[], repeat?: boolean): void;
    }

    export interface MeshLineMaterialParameters {
        lineWidth?: number;
        color?: THREE.ColorRepresentation;
        resolution?: [number, number];
        sizeAttenuation?: boolean;
        near?: number;
        far?: number;
        depthTest?: boolean;
        depthWrite?: boolean;
        alphaTest?: number;
        transparent?: boolean;
        opacity?: number;
    }

    export class MeshLineMaterial extends THREE.ShaderMaterial {
        constructor(parameters?: MeshLineMaterialParameters);
    }
}

// Make sure THREE is available for the interface definitions
import * as THREE from 'three';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: JSX.IntrinsicElements['bufferGeometry'] & {
                attach?: string;
            };
            meshLineMaterial: JSX.IntrinsicElements['shaderMaterial'] & {
                attach?: string;
                color?: THREE.ColorRepresentation;
                lineWidth?: number;
                resolution?: [number, number];
                sizeAttenuation?: boolean;
                near?: number;
                far?: number;
                depthTest?: boolean;
                depthWrite?: boolean;
                alphaTest?: number;
                transparent?: boolean;
                opacity?: number;
            };
        }
    }
}
