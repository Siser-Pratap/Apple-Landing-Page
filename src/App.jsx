import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import Mac from './Mac';
// import studio from './assets';

const App = () => {
  return (
<Canvas camera={{fov:35, position:[0, -2, 120]}}  >
  <OrbitControls />
  {/* <Environment file={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"]}/> */}
  <ScrollControls>
    <Mac />
  </ScrollControls>
</Canvas>
  )
}

export default App