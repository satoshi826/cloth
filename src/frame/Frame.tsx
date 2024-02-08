import {Box, Stack} from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import { atom } from 'jotai'

export const sidebarOpenAtom = atom(true)
export const SIDEBAR_WIDTH = 240

export function Frame({children} : React.PropsWithChildren) {
  return (
    <Stack sx={{minHeight: '100dvh'}}>
      <Header/>
      <Stack direction='row' sx={{flexGrow: 1}}>
        <Sidebar/>
        {children}
      </Stack>
    </Stack>
  )
}