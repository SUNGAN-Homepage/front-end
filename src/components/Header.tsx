import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import LOGO from '../assets/LOGO.jpg';
import { useState } from 'react';

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
  overflow: 'hidden',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row', // 768px 이상에서는 가로 배치
    alignItems: 'center', // 로고와 메뉴 버튼이 세로로 붙지 않도록 정렬
    justifyContent: 'space-between', // 로고와 버튼이 왼쪽에 배치
  },
}));

export default function Header() {
  const pages = ['HOME', 'INFO', 'PRODUCT', 'CONTACT'];
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
          zIndex: 10,
        }}
      >
        <StyledToolbar>
          {/* 로고와 Instagram 아이콘을 모바일에서는 가로로 배치 */}
          <Box
            sx={{
              display: 'flex',
              width: { xs: '100%', sm: '250px' },
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
                <InstagramIcon
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/sungan__studio/',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))', // 메뉴 가로 배치
              gap: { xs: 2, sm: 2 }, // 메뉴 간 간격
              width: '100%',
              mt: 1,
            }}
          >
            {pages.map((page) => (
              <Box
                key={page}
                sx={{
                  position: 'relative', // 텍스트가 겹치도록 설정
                  display: 'grid', // Grid로 내부 요소 배치
                  gridTemplateRows: '1fr', // 같은 행에 두 텍스트 배치
                  alignItems: 'center',
                  justifyItems: 'center',
                  '&:hover .bigMenu': {
                    opacity: selectedMenu === page ? 1 : 0, // 기본 메뉴 숨김
                    transform: 'translateY(0px) scale(1.3)', // 위로 올라오면서 확대
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    background: 'none',
                  },
                  '&:hover .upMenu': {
                    opacity: selectedMenu === page ? 0 : 1, // 호버 시 올라오는 텍스트 표시
                    transform: 'translateY(0px) scale(1.3)', // 위로 올라오면서 확대

                    transition: 'transform 0.4s ease, opacity 0.4s ease',
                    background: 'none',
                  },
                }}
              >
                {/* 기본 텍스트 */}
                <Button
                  className="bigMenu"
                  sx={{
                    color: 'black',
                    fontFamily: 'Nanum Myeongjo',
                    fontWeight: selectedMenu === page ? '700' : '400',
                    fontSize: selectedMenu === page ? '1.3rem' : '1.1rem',
                    gridColumn: '1 / 2', // 첫 번째 열
                    opacity: 1, // 초기 상태에서 표시
                    transform: 'translateY(0px)', // 초기 위치
                    transition: 'transform 0.4s ease, opacity 0.4s ease',
                    position: 'relative',
                  }}
                >
                  {page}
                </Button>

                {/* 올라오는 텍스트 */}
                <Button
                  className="upMenu"
                  sx={{
                    color: 'black',
                    fontFamily: 'Nanum Myeongjo',
                    fontWeight: selectedMenu === page ? '700' : '400',
                    fontSize: '1.1rem',

                    gridColumn: '1 / 2', // 같은 열
                    opacity: 0, // 초기 상태에서 숨김
                    transform: 'translateY(20px)', // 초기 위치 (아래쪽으로 이동)
                    transition: 'transform 0.2s ease, opacity 0.2s ease',
                    position: 'absolute', // 같은 셀 안에서 겹침
                  }}
                  onClick={() => {
                    console.log(page);
                    setSelectedMenu(page);
                  }}
                >
                  {page}
                </Button>
              </Box>
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
              <InstagramIcon
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/sungan__studio/',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
