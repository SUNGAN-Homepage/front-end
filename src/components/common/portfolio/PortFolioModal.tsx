import React, { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';
import image1 from '../../../assets/portfolio1_1.jpg';
import image2 from '../../../assets/portfolio1_2.jpg';
import image3 from '../../../assets/portfolio1_3.jpg';
import { Box } from '@mui/material';

interface PortfolioModalProps {
  isOpen: boolean;
  currentImage: {
    src: string;
    title: string;
    date: string;
  } | null;
  handleClose: () => void;
}

const PortFolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  currentImage,
  handleClose,
}) => {
  const [selectedImg, setSelectedImg] = useState<string>('');
  const [imgArr, setImgArr] = useState<string[]>([]);
  useEffect(() => {
    if (isOpen && currentImage) {
      //임시로 고정 이미지 배열 생성,백엔드 만들어지면 수정
      setSelectedImg(currentImage.src);
      const defaultImage = currentImage.src;
      setImgArr([defaultImage, image1, image2, image3]);
    }
  }, [isOpen, currentImage]);

  return (
    <Box>
      {isOpen && currentImage && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              <Close />
            </button>
            <Box sx={{ width: '100%', height: { xs: '60vh', sm: '60vh' } }}>
              <img
                src={selectedImg}
                alt={'선택된 이미지'}
                style={{ margin: '0 auto', height: '100%' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                marginTop: '-15px',
                justifyContent: 'center',
              }}
            >
              {imgArr.map((image, index) => (
                <Box
                  key={index}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setSelectedImg(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    style={{
                      width: '55px',
                      height: '55px',
                      outline:
                        selectedImg === image ? '2.5px solid blue' : 'none',
                    }}
                  />
                </Box>
              ))}
            </Box>
            <h3>{currentImage.title}</h3>
            <p>
              <strong>촬영 일:</strong> {currentImage.date}
            </p>
          </div>
        </div>
      )}
    </Box>
  );
};

export default PortFolioModal;
