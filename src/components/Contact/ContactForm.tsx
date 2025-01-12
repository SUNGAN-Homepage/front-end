import { Divider, TextField, Typography } from '@mui/material';
export default function ContactForm() {
  return (
    <div>
      <Divider
        sx={{
          borderColor: 'black',
          borderWidth: '1px',
          margin: '0 auto 4px auto', // 위쪽 마진 0, 아래쪽 마진 4px, 좌우 마진 auto
        }}
      />
      <Divider
        sx={{
          borderColor: 'black',
          borderWidth: '1px',
          margin: '0 auto 4px auto', // 위쪽 마진 0, 아래쪽 마진 4px, 좌우 마진 auto
        }}
      />
      <Typography marginTop={2}>1. 이름</Typography>
      <TextField fullWidth variant="standard" placeholder="(필수 사항)" />
      <Typography marginTop={2}>2.상호명</Typography>
      <TextField fullWidth variant="standard" placeholder="(선택 사항)" />
      <Typography marginTop={2}>3. 이메일</Typography>
      <TextField fullWidth variant="standard" placeholder="(필수 사항)" />
      <Typography marginTop={2}>4.문의 유형</Typography>
      <TextField fullWidth variant="standard" />
      <Typography marginTop={2}>5.내용</Typography>
      <TextField
        multiline
        minRows={5}
        placeholder="내용을 입력해 주세요"
        style={{ width: '100%' }}
      />
      <Divider
        sx={{
          borderColor: 'black',
          borderWidth: '1.5px',
          margin: '10px auto 4px auto', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
        }}
      />{' '}
      <Divider
        sx={{
          borderColor: 'black',
          borderWidth: '1.5px',
          margin: '4px auto 4px auto', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
        }}
      />
    </div>
  );
}
