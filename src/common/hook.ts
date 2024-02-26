import {KeyboardEvent, useEffect} from 'react'
import {atom, useAtomValue, useSetAtom} from 'jotai'

const keyDownSetAtom = atom(new Set<string>())

export const useListenKeyDown = () => {
  const setKeyDownSet = useSetAtom(keyDownSetAtom)

  const handleKeyDown = (e: Event) => setKeyDownSet(prev => {
    const code = (e as unknown as KeyboardEvent).code
    const next = new Set(prev)
    next.add(code)
    return next
  })
  const handleKeyUp = (e : Event) => setKeyDownSet(prev => {
    const code = (e as unknown as KeyboardEvent).code
    const next = new Set(prev)
    next.delete(code)
    return next
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const useKeyDownSet = () => useAtomValue(keyDownSetAtom)