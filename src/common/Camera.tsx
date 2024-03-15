import {useRef} from 'react'
import {OrbitControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {CapsuleCollider, RigidBody, useRapier} from '@react-three/rapier'
import {forEachObj} from 'remeda'
import {Vector3} from 'three'
import {useKeyDownSet} from './hook'

const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()
const speed = new Vector3()
const SPEED = 5

const logKey = (obj : object, ref) => forEachObj.indexed(obj, (v, k) => {
  if (v) {
    console.log(k, ref)
  }
})

export function Camera() {
  const keyDownSet = useKeyDownSet()

  const getVector = () => ({
    forward : keyDownSet.has('KeyW'),
    backward: keyDownSet.has('KeyS'),
    left    : keyDownSet.has('KeyA'),
    right   : keyDownSet.has('KeyD'),
    jum     : keyDownSet.has('Space')
  })

  const ref = useRef()
  // const rapier = useRapier()

  useFrame(({camera}, delta) => {
    const {forward, backward, left, right, jum} = getVector()
    const velocity = ref.current.linvel()
    // const {x, y, z} = ref.current.translation()
    // // camera.position.set(x, y, z)
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED)
    ref.current.setLinvel({x: direction.x, y: velocity.y, z: direction.z})
    logKey({forward, backward, left, right, jum}, ref)

    // // jumping
    // const world = rapier.world
    // const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), {x: 0, y: -1, z: 0}))
    // const grounded = ray sadw&& ray.collider && Math.abs(ray.toi) <= 1.75
    if (jum) ref.current.setLinvel({x: 0, y: 7.5, z: 0})
  })

  return (
    <>
      <OrbitControls
        makeDefault
        rotateSpeed={-0.7}
        enableZoom={false}
      />
      <RigidBody ref={ref} colliders={false} mass={1} type="dynamic"
        position={[0, 10, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.75, 0.5]} />
        {/* <mesh>
          <boxGeometry args={ [.5, .5, .5]} />
          <meshPhongMaterial />
        </mesh> */}
      </RigidBody>
    </>

  )
}