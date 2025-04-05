import { Box, Button, Typography } from '@mui/material';
import { AnimatedComponent } from '../common/AnimatedComponent.tsx';
import urlIntroImg from '../../assets/Intro.jpg';

function Intro() {
  return (
    <AnimatedComponent id="home">
      <Box
        sx={{
          background: 'gray',
          mt: { xs: 5, sm: '0' },
          backgroundImage: `url(${urlIntroImg})`,
          backgroundSize: 'cover',
          height: '650px',
          backgroundPosition: 'center bottom', // 아래쪽을 더 보이게
        }}
      >
        <Box
          sx={{
            textAlign: { xs: 'center', sm: 'start' },
            marginLeft: { xs: 0, sm: 5 },
            padding: 4,
          }}
        >
          <Typography
            variant="h3"
            marginBottom={3}
            marginTop={10}
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            지역 축제 및 행사 아카이빙 플랫폼
          </Typography>
          <Typography
            variant="h4"
            marginBottom={10}
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // 그림자처럼 외곽선
            }}
          >
            지역 축제 및 행사 기록을 남기는 아카이빙 플랫폼입니다.
          </Typography>

          <Button
            sx={{
              marginTop: 5,
              width: '150px',
              background: 'white',
              color: 'black',
              marginBottom: 5,

              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                background: '#f5f5f5',
              },
            }}
            onClick={() =>
              window.open(
                'https://booking.naver.com/booking/6/bizes/665865/items/4352330?startDate=2025-02-05',
                '_blank',
                'noopener,noreferrer',
              )
            }
          >
            예약하기
          </Button>
        </Box>
      </Box>
    </AnimatedComponent>
  );
}

export default Intro;
