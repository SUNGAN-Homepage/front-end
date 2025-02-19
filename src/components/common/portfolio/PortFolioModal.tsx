import React, { useEffect, useState } from 'react';
import image1 from '../../../assets/portfolio1_1.jpg';
import image2 from '../../../assets/portfolio1_2.jpg';
import image3 from '../../../assets/portfolio1_3.jpg';
import { Box, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

interface PortfolioModalProps {
  isOpen: boolean;
  currentImage: {
    src: string;
    title: string;
    date: string;
  } | null;
  handleClose: () => void;
  isProfile: boolean;
}

const PortFolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  currentImage,
  handleClose,
  isProfile,
}) => {
  const [imgArr, setImgArr] = useState<string[]>([]);
  useEffect(() => {
    if (isOpen && currentImage) {
      //임시로 고정 이미지 배열 생성,백엔드 만들어지면 수정
      const defaultImage = currentImage.src;
      setImgArr([defaultImage, image1, image2, image3]);
    }
  }, [isOpen, currentImage]);

  return (
    <>
      {isOpen && currentImage && (
        <div className="modal" onClick={handleClose}>
          <button
            className="close-button"
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: '5',
            }}
          >
            <Close />
          </button>
          <Box
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            sx={{
              borderRadius: '7px',
              maxHeight: '90vh',
              overflow: 'auto',
              backgroundColor: 'white',
              '&::-webkit-scrollbar': {
                width: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  color: 'black',
                  fontSize: '30px',
                  justifyContent: 'center',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                {currentImage.title}
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'black',
                  borderTop: '1px solid #eeeeee',
                  borderBottom: '1px solid #eeeeee',
                }}
              >
                촬영일시 : {currentImage.date}
              </Typography>
              {!isProfile && (
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'black',
                    borderBottom: '1px solid #eeeeee',
                  }}
                >
                  행사장소 : 연암공과대학교 산학 협력단
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                justifyContent: 'center',
              }}
            >
              {isProfile ? (
                <>
                  <img
                    src={imgArr[0]}
                    alt={`img`}
                    style={{
                      height: '100vh',
                      background: 'white',
                      // width: '100vw',
                      // width: '100%',
                    }}
                  />
                </>
              ) : (
                <>
                  {imgArr.map((image, index) => (
                    <Box key={index} sx={{ cursor: 'pointer' }}>
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};
export default PortFolioModal;
