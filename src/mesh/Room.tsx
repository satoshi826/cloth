import {CuboidCollider} from '@react-three/rapier'
import {BackSide} from 'three'

export function Room() {
  return(
    <>
      <mesh>
        <boxGeometry args={ [10, 4, 10]} />
        <meshPhongMaterial side={BackSide} color='#777' />
      </mesh>
      <CuboidCollider
        position={[0, -3, 0]}
        args={[10, 1, 10]}
      />
    </>
  )
}