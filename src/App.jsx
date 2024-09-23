import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Mac from './Mac';


const App = () => {
  return (
<Canvas camera={{fov:20, position:[0, -2, 120]}}  >
  <OrbitControls />
  <Mac />
</Canvas>
  )
}

export default App