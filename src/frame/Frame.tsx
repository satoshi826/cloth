import {Stack} from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import {atom} from 'jotai'

export const sidebarOpenAtom = atom(true)
export const SIDEBAR_WIDTH = 200

export function Frame({children} : React.PropsWithChildren) {
  return (
    <Stack sx={{height: '100%'}}>
      <Header/>
      <Stack direction='row' sx={{height: '100%'}}>
        <Sidebar/>
        {children}
      </Stack>
    </Stack>
  )
}