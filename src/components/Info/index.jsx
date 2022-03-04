import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from './InfoElements';

const Info = ({
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
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <div style={{ marginRight: '3em' }}>
                  <div
                    style={{
                      display: ' flex',
                      flexDirection: ' row',
                      justifyContent: 'space-between',
                    }}
                    className='testClass'
                  >
                    <a
                      href='https://api.whatsapp.com/send?phone=5553984198050'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div class='social-btn whatsapp-color'>
                        <p>Whatsapp</p>
                        <div class='icons8-whatsapp'></div>
                      </div>
                    </a>

                    <a
                      href='https://www.instagram.com/telecoleta/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div class='social-btn instagram-color'>
                        <p>Instagram</p>
                        <div class='icons8-instagram'></div>
                      </div>
                    </a>
                  </div>
                  <div
                    className='test2'
                    style={{
                      display: 'flex',
                      marginTop: '1em',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href='https://www.facebook.com/telecoletabage'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div class='social-btn facebook-color'>
                        <p>Facebook</p>
                        <div class='icons8-facebook'></div>
                      </div>
                    </a>
                  </div>
                </div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
