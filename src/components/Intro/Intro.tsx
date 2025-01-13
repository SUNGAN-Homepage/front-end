import { Box, Button, Typography } from '@mui/material';

export const Intro = () => {
  return (
    //추후 이미지로 대체
    <Box
      sx={{
        background: 'gray',
        mt: { xs: '3.5rem', sm: '0' },
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
          }}
        >
          예약하기
        </Button>
      </Box>
    </Box>
  );
};
