import * as THREE from 'three';

declare module 'meshline' {
    export class MeshLineGeometry extends THREE.BufferGeometry {
        setPoints(points: THREE.Vector3[]): void;
    }

    export class MeshLineMaterial extends THREE.ShaderMaterial {
        constructor(options?: {
            color?: string | THREE.Color;
            lineWidth?: number;
            map?: THREE.Texture;
            useMap?: boolean;
            resolution?: [number, number];
            repeat?: [number, number];
            depthTest?: boolean;
        });
    }
}

declare module '@react-three/fiber' {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: {
                ref?: React.Ref<any>;
                attach?: string;
            };
            meshLineMaterial: {
                ref?: React.Ref<any>;
                attach?: string;
                color?: string | THREE.Color;
                lineWidth?: number;
                map?: THREE.Texture;
                useMap?: boolean;
                resolution?: [number, number];
                repeat?: [number, number];
                depthTest?: boolean;
            };
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: {
                ref?: React.Ref<any>;
                attach?: string;
            };
            meshLineMaterial: {
                ref?: React.Ref<any>;
                attach?: string;
                color?: string | THREE.Color;
                lineWidth?: number;
                map?: THREE.Texture;
                useMap?: boolean;
                resolution?: [number, number];
                repeat?: [number, number];
                depthTest?: boolean;
            };
        }
    }
}
