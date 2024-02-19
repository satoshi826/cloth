import {styled} from '@mui/material'
import {Canvas as R3FCanvas} from '@react-three/fiber'
import Room from '../mesh/Room'

export function Canvas() {
  return (
    <CanvasWrapper>
      <R3FCanvas style={{position: 'absolute', width: '100%', height: '100%'}}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <Room/>
      </R3FCanvas>
    </CanvasWrapper>
  )
}

const CanvasWrapper = styled('div')({
  position: 'relative',
  width   : '100%',
  height  : '100%'
})