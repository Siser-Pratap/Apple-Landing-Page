import React from 'react'
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const Mac = () => {

let model = useGLTF("/mac.glb");
let tex = useTexture("/red.jpg");
let meshes = {}

model.scene.traverse((e)=>{
  meshes[e.name]=e;
})


// meshes.matte.material.map= tex;


let data = useScroll();
console.log(meshes);
useFrame((state, delta)=>{
   
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180-data.offset*90);
})


  return (
    <group position={[0, -10, 20]}>
          <primitive object={model.scene}/>
   </group>
  )
}

export default Mac