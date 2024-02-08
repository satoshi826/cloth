import {Canvas as R3FCanvas} from '@react-three/fiber'

export function Canvas({children} : React.PropsWithChildren) {
  return (
    <div id="canvas-container">
      <R3FCanvas >{children}</R3FCanvas>
    </div>
  )
}