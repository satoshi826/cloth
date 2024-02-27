import {styled} from '@mui/material'
// import {ContactShadows, TorusKnot} from '@react-three/drei'
import {TorusKnot} from '@react-three/drei'
import {Canvas as R3FCanvas} from '@react-three/fiber'
import {Physics, RigidBody} from '@react-three/rapier'
import {Camera} from './Camera'
import {PointLight} from '../mesh/PointLight'
import {Room} from '../mesh/Room'

export function Canvas() {
  return (
    <StyledCanvas camera={{fov: 70, near: 0.1, far: 190, position: [0, 0, 0.0001]}} >
      <Physics >
        <Camera/>
        <ambientLight intensity={0.2} />
        <PointLight position={[0, 0, 2]} intensity={10} decay={2} helper/>
        <Box/>
        <RigidBody scale={0.1} position={[0, 0, -1]}>
          <TorusKnot scale={0.5}>
            <meshStandardMaterial color="#ccc" />
          </TorusKnot>
        </RigidBody>
        <Room/>
        {/* <ContactShadows
          scale={20}
          blur={0.4}
          opacity={0.2}
          position={[-0, -1.5, 0]}
        /> */}
      </Physics>
    </StyledCanvas>
  )
}

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

const StyledCanvas = styled(R3FCanvas)({
  backgroundColor: '#111',
  '& > div'      : {
    position: 'absolute'
  }
})