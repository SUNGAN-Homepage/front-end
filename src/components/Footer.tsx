import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        height: { sm: '100px' },
        backgroundColor: '#303030',
        textAlign: 'center',
        marginTop: '20px',

        paddingTop: 1,
        paddingBottom: 1,
        display: 'flex',
        justifyContent: 'center', // 중앙에 배치
        alignItems: 'center', // 수직 중앙 정렬
      }}
    >
      <Box
        sx={{
          display: { sm: 'flex' },
          justifyContent: { sm: 'center' }, // 항목들을 가로로 배치
          gap: { sm: 4 }, // 항목들 간의 간격 설정
          flexWrap: { sm: 'wrap' }, // 작은 화면에서 항목들이 줄 바뀌도록 설정
        }}
      >
        <Typography sx={{ color: 'white', fontSize: { sm: '20px' } }}>
          전화: 최지호, 010-2506-4076
        </Typography>
        <Typography sx={{ color: 'white', fontSize: { sm: '20px' } }}>
          이메일: dj7013@naver.com
        </Typography>
        <Typography sx={{ color: 'white', fontSize: { sm: '20px' } }}>
          위치: 경남 진주시 대신로 365 지하건물 1층
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
