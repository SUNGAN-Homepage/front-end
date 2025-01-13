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
  borderBottom: '1px solid #c8c8c8',
  borderMargin: '2px',
  flexDirection: 'column', // 기본적으로 세로 배치
  justifyContent: 'flex-start',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row', // 768px 이상에서는 가로 배치
    alignItems: 'center', // 로고와 메뉴 버튼이 세로로 붙지 않도록 정렬
    justifyContent: 'flex-start', // 로고와 버튼이 왼쪽에 배치
  },
}));

export default function Header() {
  const pages = ['HOME', 'INFO', 'PRODUCT', 'CONTACT'];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
          zIndex: 10,
          // zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <StyledToolbar>
          {/* 로고와 Instagram 아이콘을 모바일에서는 가로로 배치 */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between', // 로고와 Instagram 아이콘을 양쪽 끝에 배치
              alignItems: 'center',
            }}
          >
            {/* 로고 */}
            <Box sx={{ cursor: 'pointer', marginTop: '5px' }}>
              <img
                src={LOGO}
                alt="로고"
                width="180px"
                style={{ marginRight: '10px' }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: 'block', sm: 'none' },
                marginLeft: '100px',
                flexShrink: 0,
              }}
            >
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* 메뉴 버튼들 */}
          <Box
            sx={{
              display: 'flex',
              width: '800%',
              justifyContent: 'flex-start',
              gap: 2,
              mt: 1,
              paddingLeft: '5px',
              paddingRight: '5px',
            }}
          >
            {pages.map((page) => (
              <Button key={page} sx={{ color: 'black' }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Instagram 아이콘: 768px 이상에서 우측 상단으로 배치 */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              flexShrink: 0,
            }}
          >
            <IconButton sx={{ marginLeft: 'auto', marginTop: '5px' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
