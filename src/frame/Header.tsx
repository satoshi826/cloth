import {AppBar, Stack, Typography, Icon, IconButton} from '@mui/material'
import { useAtom } from 'jotai'
import { sidebarOpenAtom } from '.'

export default function Header() {
  const [open, setOpen] = useAtom(sidebarOpenAtom)
  return (
    <AppBar sx={{position: 'static'}}>
      <Stack direction='row' alignItems='center' >
        <IconButton onClick={() => setOpen(prev => !prev)}>
          <Icon >menu</Icon>
        </IconButton>
        <Typography variant="h6" noWrap>
          Hoge
        </Typography>
      </Stack>
    </AppBar>
  )
}