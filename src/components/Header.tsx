import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import LOGO from '../assets/LOGO.jpg';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  display: 'flex',
  backgroundColor: 'white',
  color: 'black',
  flexDirection: 'column', // 수직 정렬
  justifyContent: 'flex-start', // 상단 정렬
}));

export default function Header() {
  const pages = ['HOME', 'INFO', 'PRODUCT', 'CONTACT'];

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ cursor: 'pointer', marginTop: '5px' }}>
              <img src={LOGO} alt={'로고'} width={'180px'} />
            </Box>
            <IconButton sx={{ marginLeft: 'auto' }}>
              <InstagramIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between', // 버튼들이 가로로 균등하게 배치되도록 설정
              mt: 1,
            }}
          >
            {pages.map((page) => (
              <Button key={page} sx={{ color: 'black', flexGrow: 1 }}>
                {page}
              </Button>
            ))}
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
