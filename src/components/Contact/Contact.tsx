import { Box, Typography, Divider } from '@mui/material';
import ContactForm from './ContactForm';

export const Contact = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          margin: '0 auto',
          textAlign: 'center',
          padding: 2, // 필요에 따라 패딩 조정
        }}
      >
        <Divider
          sx={{
            borderColor: 'black',
            borderWidth: '1.5px',
            margin: '0 auto 4px auto', // 위쪽 마진 0, 아래쪽 마진 4px, 좌우 마진 auto
            width: '180px', // 선의 너비 설정
          }}
        />
        <Divider
          sx={{
            borderColor: 'black',
            borderWidth: '1.5px',
            margin: '4px auto 4px auto', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            width: '180px', // 선의 너비 설정
          }}
        />
        <Typography variant="h4">CONTACT</Typography>
        <Divider
          sx={{
            borderColor: 'black',
            borderWidth: '1.5px',
            margin: '0 auto 4px auto', // 위쪽 마진 0, 아래쪽 마진 4px, 좌우 마진 auto
            width: '180px', // 선의 너비 설정
          }}
        />
        <Divider
          sx={{
            borderColor: 'black',
            borderWidth: '1.5px',
            margin: '4px auto 12px auto', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            width: '180px', // 선의 너비 설정
          }}
        />
      </Box>
      <ContactForm />
    </Box>
  );
};
