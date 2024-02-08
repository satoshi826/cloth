import {Button} from '@mui/material'
import {useState} from 'react'
import {Frame} from './frame'
import {Canvas} from './common/Canvas'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Frame>
      <div style={{backgroundColor: 'red', width: '100%'}}/>
      {/* <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas> */}
    </Frame>
  )
}

export default App
