import {useEffect, useRef} from 'react'
import {OrbitControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {Vector3} from 'three'
import {useKeyDownSet} from './hook'


export function Camera() {
  const keyDownSet = useKeyDownSet()

  const getVector = () => ({
    forward : keyDownSet.has('KeyW'),
    backward: keyDownSet.has('KeyS'),
    left    : keyDownSet.has('KeyA'),
    right   : keyDownSet.has('KeyD'),
    jum     : keyDownSet.has('Space')
  })

  const direction = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()
  const speed = new Vector3()
  const SPEED = 5

  const velocity = useRef([0, 0, 0])

  useFrame(({camera}, delta) => {
    const {forward, backward, left, right, jump} = getVector()
    forward && console.log(keyDownSet)
  })

  return (
    <OrbitControls
      makeDefault
      rotateSpeed={-0.7}
      enableZoom={false}
    />
  )
}