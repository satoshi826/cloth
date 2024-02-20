import {Drawer, Stack, styled} from '@mui/material'
import {useAtom} from 'jotai'
import {useIsXs} from '../theme/hooks'
import {SIDEBAR_WIDTH, sidebarOpenAtom} from '.'

export default function Sidebar() {
  const [open, setOpen] = useAtom(sidebarOpenAtom)
  const isXs = useIsXs()
  const variant = isXs ? 'temporary' : 'persistent'
  return (
    <StyledDrawer open={open} onClose={() => setOpen(false)} variant={variant} >
      <Stack>
        <div>empty</div>
      </Stack>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer)(({
  open,
  theme : {
    transitions : {
      duration : {enteringScreen, leavingScreen},
      easing: {easeIn, easeOut}
    },
    zIndex : {appBar},
    breakpoints
  }}) => ({
  '.MuiPaper-root': {
    width : SIDEBAR_WIDTH,
    zIndex: appBar - 1
  },
  [breakpoints.up('sm')]: {
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
}
))