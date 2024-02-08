import {Drawer, DrawerProps, Stack, styled} from '@mui/material'
import { useAtom } from 'jotai'
import { SIDEBAR_WIDTH, sidebarOpenAtom } from '.'

export default function Sidebar() {
  const [open, setOpen] = useAtom(sidebarOpenAtom)
  return (
    <StyledDrawer open={open} variant="persistent" sx={{width:SIDEBAR_WIDTH}}>
      <Stack>
        <div>hoge</div>
      </Stack>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer)({
  '.MuiDrawer-paper': {
    position : 'static',
  },
  '.MuiDrawer-root': {
    backgroundColor : 'blue'
  }
})