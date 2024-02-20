import {BackSide} from 'three'

export default function Room() {
  return(
    <mesh >
      <boxGeometry args={ [10, 4, 10]} />
      <meshPhongMaterial side={BackSide} color='#777' />
    </mesh>
  )
}