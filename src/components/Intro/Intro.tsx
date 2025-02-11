import { Box, Button, Typography } from '@mui/material';
import { AnimatedComponent } from '../common/AnimatedComponent.tsx';

export const Intro = () => {
  return (
    //추후 이미지로 대체
    <AnimatedComponent id="home">
      <Box
        sx={{
          background: 'gray',
          mt: { xs: 5, sm: '0' },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: 'center', sm: 'start' },
            marginLeft: { xs: 0, sm: 5 },
            padding: 4,
          }}

        >
          <Typography variant="h3" marginBottom={3} marginTop={10}>
            간략 소개
          </Typography>
          <Typography variant="h4" marginBottom={10}>
            간단하게 기업에 대한 소개
          </Typography>

          <Button
            sx={{
              marginTop: 5,
              width: '150px',
              background: 'white',
              color: 'black',
              marginBottom: 5,

              transition: 'transform 0.3s ease', // 애니메이션 효과 추가
              '&:hover': {
                transform: 'scale(1.1)', // 호버 시 크기 확대
                background: '#f5f5f5', // 호버 시 배경색 변경
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
};
