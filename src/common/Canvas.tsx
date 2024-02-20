import {styled} from '@mui/material'
import {OrbitControls} from '@react-three/drei'
import {Canvas as R3FCanvas} from '@react-three/fiber'
import {PointLight} from '../mesh/PointLight'
import {Room} from '../mesh/Room'

export function Canvas() {
  return (
    <StyledCanvas>
      <ambientLight intensity={0.2} />
      <PointLight position={[0, 0, 2]} intensity={10} decay={2} helper/>
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