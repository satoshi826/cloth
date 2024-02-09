import {AppBar, Typography, Icon, IconButton, styled} from '@mui/material'
import {useSetAtom} from 'jotai'
import {sidebarOpenAtom} from '.'

export default function Header() {
  const setOpen = useSetAtom(sidebarOpenAtom)
  return (
    <StyledAppBar>
      <IconButton onClick={() => setOpen(prev => !prev)}>
        <Icon >menu</Icon>
      </IconButton>
      <Typography variant="h6" noWrap>
        Hoge
      </Typography>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)({
  position     : 'static',
  display      : 'flex',
  alignItems   : 'center',
  flexDirection: 'row'
})