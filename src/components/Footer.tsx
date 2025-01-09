import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#303030',
        textAlign: 'center',
        paddingTop: 1,
        paddingBottom: 1,
      }}
    >
      <Typography sx={{ color: 'white' }}>전화:xxx-xxxx-xxxx</Typography>
      <Typography sx={{ color: 'white' }}> 이메일:xxxx@xxxx.xxx</Typography>
      <Typography sx={{ color: 'white' }}> 위치:xxxxx xxx xxxxx xx</Typography>
    </Box>
  );
};
