import {BackSide} from 'three'

export default function Room() {
  return(
    <mesh >
      <boxGeometry args={ [150, 75, 150]} />
      <meshPhongMaterial side={BackSide} color='#777' />
    </mesh>
  )
}