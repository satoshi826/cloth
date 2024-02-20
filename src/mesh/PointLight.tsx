import {MutableRefObject, forwardRef, useRef} from 'react'
import {useHelper} from '@react-three/drei'
import {PointLightProps} from '@react-three/fiber'
import {Object3D, PointLightHelper} from 'three'

type PointLightType = typeof PointLight

export function PointLight(props : PointLightProps & { helper? : boolean}) {
  const {helper} = props
  const ref = useRef<PointLightType>()
  return (
    <>
      {helper && <Helper ref={ref}/>}
      <pointLight ref={ref} {...props} />
    </>
  )
}

const Helper = forwardRef(function Helper(_, ref : Ref<PointLightType>) {
  useHelper(ref, PointLightHelper, 1)
  return null
})