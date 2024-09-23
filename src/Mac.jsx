import React from 'react'
import { useGLTF } from '@react-three/drei'


const Mac = () => {

let model = useGLTF("../public/mac.glb");



  return (
   <primitive object={model.scene}/>
  )
}

export default Mac