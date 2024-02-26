import {useRef} from 'react'
import {useHelper} from '@react-three/drei'
import {PointLightProps} from '@react-three/fiber'
import {PointLightHelper} from 'three'

type Props = PointLightProps & { helper? : boolean}

export function PointLight({helper = false, ...props} : Props) {
  const ref = useHelperRef(helper)
  return <pointLight ref={ref} {...props} />
}

const useHelperRef = (helper : boolean) => {
  const ref = useRef(null!)
  useHelper(ref, PointLightHelper, 1)
  return helper ? ref : null
}