import React from 'react';
import {
  GaleryContainer,
  GaleryWrapper,
  GaleryRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from './GaleryElements';

const Galery = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  alt,
  img,
  img2,
  hasText,
}) => {
  return (
    <>
      <GaleryContainer lightBg={lightBg} id={id}>
        <GaleryWrapper>
          <GaleryRow imgStart={imgStart}>
            <Column1>
              {hasText ? (
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              ) : (
                <ImgWrap>
                  {typeof img2 === 'string' || img2 instanceof String ? (
                    <Img src={img2} alt={alt} />
                  ) : (
                    img2
                  )}
                </ImgWrap>
              )}
            </Column1>
            <Column2>
              <ImgWrap>
                {typeof img === 'string' || img instanceof String ? (
                  <Img src={img} alt={alt} />
                ) : (
                  img
                )}
              </ImgWrap>
            </Column2>
          </GaleryRow>
        </GaleryWrapper>
      </GaleryContainer>
    </>
  );
};

export default Galery;
