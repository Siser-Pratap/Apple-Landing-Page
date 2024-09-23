import React from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const Mac = () => {

let model = useGLTF("../public/mac.glb");
let meshes = {}

model.scene.traverse((e)=>{
  meshes[e.name]=e;
})

meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);

let data = useScroll();

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