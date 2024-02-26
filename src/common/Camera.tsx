import {OrbitControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {Vector3} from 'three'
import {useKeyDownSet} from './hook'

export function Camera() {
  const keyDownSet = useKeyDownSet()

  const direction = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()
  const speed = new Vector3()
  const SPEED = 5

  useFrame(({camera}, delta) => {
    const direction = new Vector3()
    if (keyDownSet.has('keyW')) direction.set(0, 0, 1)
    if (keyDownSet.has('keyA')) direction.set(-1, 0, 0)

  })
  return (
    <OrbitControls
      makeDefault
      rotateSpeed={-0.7}
      enableZoom={false}
    />
  )
}