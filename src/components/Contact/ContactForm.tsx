import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<string>('');
  const handleChangeInquiry = (event: SelectChangeEvent) => {
    setInquiryType(event.target.value);
  };
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
      <Typography marginTop={2}>1. 이름*</Typography>
      <TextField fullWidth variant="standard" placeholder="(필수 사항)" />
      <Typography marginTop={2}>2. 상호명 (회사명)</Typography>
      {/*todo: 상호명하고 연락처는 없으면 "NA"로 보내기*/}
      <TextField fullWidth variant="standard" placeholder="(선택 사항)" />
      <Typography marginTop={2}>3. 이메일*</Typography>
      <TextField fullWidth variant="standard" placeholder="(필수 사항)" />
      <Typography marginTop={2}>4. 전화번호</Typography>
      <TextField fullWidth variant="standard" placeholder="(선택 사항)" />
      <Typography marginTop={2}>5. 문의 유형*</Typography>
      <FormControl fullWidth sx={{ marginTop: '5px' }}>
        <InputLabel id={'demo-simple-select-label'}>문의 유형</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={'문의 유형'}
          value={inquiryType}
          onChange={handleChangeInquiry}
        >
          <MenuItem value={'프로필 촬영'}>프로필 촬영</MenuItem>
          <MenuItem value={'증명사진 촬영'}>증명사진 촬영</MenuItem>
          <MenuItem value={'여권 촬영'}>여권 촬영</MenuItem>
          <MenuItem value={'선거 관련 촬영'}>선거 관련 촬영</MenuItem>
          <MenuItem value={'단체 촬영'}>단체 촬영</MenuItem>
          <MenuItem value={'행사 촬영'}>행사 촬영</MenuItem>
          <MenuItem value={'스냅 촬영'}>스냅 촬영</MenuItem>
          <MenuItem value={'이외 기타'}>이외 기타</MenuItem>
        </Select>
      </FormControl>
      <Typography marginTop={2}>6. 내용*</Typography>
      <TextField
        multiline
        minRows={5}
        placeholder="내용을 입력해 주세요"
        style={{ width: '100%' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant={'outlined'}
          size={'large'}
          sx={{
            marginTop: '10px',
            border: '1px solid #c8c8c8',
            color: 'black',
          }}
        >
          제출
        </Button>
      </Box>
      <Divider
        sx={{
          borderColor: 'black',
          borderWidth: '1.5px',
          margin: '10px auto 4px auto', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
        }}
      />
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
