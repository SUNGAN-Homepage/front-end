import { Box, Button, Typography } from '@mui/material';

export const Intro = () => {
  return (
    //추후 이미지로 대체
    <Box sx={{ background: 'gray' }} mt={'3.5rem'}>
      <Box
        sx={{
          textAlign: 'center',
          margin: '0 auto',
          padding: 4,
        }}
      >
        <Typography variant="h3" marginBottom={5} marginTop={5}>
          간략 소개
        </Typography>
        <Typography variant="h4" marginBottom={5}>
          간단하게 기업에 대한 소개
        </Typography>

        <Button
          sx={{
            marginTop: 5,
            width: '150px',
            background: 'white',
            color: 'black',
            marginBottom: 10,
          }}
        >
          예약하기
        </Button>
      </Box>
    </Box>
  );
};
