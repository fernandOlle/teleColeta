import React, { useEffect, useState } from 'react';
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

import useWindowSize from './UseWindowSize';

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
  const [videoWidth, setVideoWidth] = useState('560');
  const [videoHeight, setVideoHeight] = useState('315');

  let window = useWindowSize();

  useEffect(() => {
    console.log(window.width);
    if (
      !(typeof img2 === 'string' || img2 instanceof String) ||
      (!(typeof img === 'string' || img instanceof String) &&
        window.width <= 610)
    ) {
      if (window.width <= 481) {
        setVideoWidth('282');
        setVideoHeight('159');
      } else {
        setVideoWidth('405');
        setVideoHeight('228');
      }
    } else if (window.width >= 610) {
      setVideoWidth('560');
      setVideoHeight('315');
    }
  }, [window.width]);

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
                    <iframe
                      width={parseInt(videoWidth).toString()}
                      height={(parseInt(videoHeight) + 75).toString()}
                      {...img2}
                      allowfullscreen
                    ></iframe>
                  )}
                </ImgWrap>
              )}
            </Column1>
            <Column2>
              <ImgWrap>
                {typeof img === 'string' || img instanceof String ? (
                  <Img src={img} alt={alt} />
                ) : (
                  <iframe
                    width={videoWidth}
                    height={videoHeight}
                    {...img}
                    allowfullscreen
                  ></iframe>
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
