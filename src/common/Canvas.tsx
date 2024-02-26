import {styled} from '@mui/material'
import {Canvas as R3FCanvas} from '@react-three/fiber'
import {Camera} from './Camera'
import {PointLight} from '../mesh/PointLight'
import {Room} from '../mesh/Room'

export function Canvas() {
  return (
    <StyledCanvas camera={{fov: 70, near: 0.1, far: 190, position: [0, 0, 0.0001]}}
    >
      <Camera/>
      <ambientLight intensity={0.2} />
      <PointLight position={[0, 0, 2]} intensity={10} decay={2} helper/>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <Room/>
    </StyledCanvas>
  )
}

const StyledCanvas = styled(R3FCanvas)({
  backgroundColor: '#111',
  '& > div'      : {
    position: 'absolute'
  }
})