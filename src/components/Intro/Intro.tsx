import { Box, Button, Typography } from '@mui/material';

export const Intro = () => {
  return (
    //추후 이미지로 대체
    <Box sx={{ background: 'gray' }}>
      <Box
        sx={{
          textAlign: 'center', // 텍스트 중앙 정렬
          margin: '0 auto', // Box 자체를 부모 내에서 수평 중앙 정렬 (필요 시)
          padding: 4, // 패딩 추가 (선택 사항)
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
            // fontSize: '12px',
            marginBottom: 10,
          }}
        >
          예약하기
        </Button>
      </Box>
    </Box>
  );
};
