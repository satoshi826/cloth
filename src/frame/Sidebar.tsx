import {Drawer, Stack, styled} from '@mui/material'
import {useAtom} from 'jotai'
import {SIDEBAR_WIDTH, sidebarOpenAtom} from '.'

export default function Sidebar() {
  const [open, setOpen] = useAtom(sidebarOpenAtom)
  return (
    <StyledDrawer open={open} variant="persistent" >
      <Stack>
        <div>hoge</div>
      </Stack>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer)(({
  open,
  theme : {transitions : {
    duration : {enteringScreen, leavingScreen},
    easing: {easeIn, easeOut}
  }}}) => ({
  '&.MuiDrawer-root': {
    transition: 'width ' + (open ? enteringScreen : leavingScreen) + 'ms ' + (open ? easeOut : easeIn),
    width     : open ? SIDEBAR_WIDTH : 0
  },
  '&.MuiDrawer-docked': {
    position: 'relative'
  },
  '.MuiPaper-root': {
    position: 'absolute',
    width   : SIDEBAR_WIDTH
  }
}
))