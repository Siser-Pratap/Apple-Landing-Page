import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";


const Mac = () => {

let model = useGLTF("../public/mac.glb");
let meshes = {}

model.scene.traverse((e)=>{
  meshes[e.name]=e;
})

meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);



  return (
    <group position={[0, -10, 20]}>
          <primitive object={model.scene}/>
   </group>
  )
}

export default Mac