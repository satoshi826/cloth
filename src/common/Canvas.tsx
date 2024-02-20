import {styled} from '@mui/material'
import {Canvas as R3FCanvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Room from '../mesh/Room'

export function Canvas() {
  return (
    <StyledCanvas>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={50} decay={2} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <Room/>
      <OrbitControls
        // camera={camera}
        // domElement={domElement}
        // enablePan={false}
        // maxPolarAngle={ 1.95 * Math.PI / 3}
        // minPolarAngle={ 1.05 * Math.PI / 3}
        // minDistance={10}
        // maxDistance={80}
      />
    </StyledCanvas>
  )
}

const StyledCanvas = styled(R3FCanvas)({
  backgroundColor: '#111',
  '& > div'      : {
    position: 'absolute'
  }
})