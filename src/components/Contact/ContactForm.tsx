import { Divider, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
export default function ContactForm() {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${
          theme.palette.mode === 'dark' ? grey[700] : grey[200]
        };
        box-shadow: 0 2px 2px ${
          theme.palette.mode === 'dark' ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
            theme.palette.mode === 'dark' ? blue[600] : blue[200]
          };
        }
    
        /* firefox */
        &:focus-visible {
          outline: 0;
        }
      `,
  );

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
      <Textarea
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
